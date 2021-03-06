'use strict';

import ApiResponseStatus from '../../api-enum';
import DailySheet from '../../../src/personal/daily-log/daily-sheet';
import DailyLog from '../../../src/personal/daily-log/daily-log';

import { google } from 'googleapis';

/**
 * Get all Daily Sheet in my Daily Log
 * @param req: request
 * @param res: response
 * @returns {Promise<[DailySheet]>}
 */
const index = async (req, res) => {
  try {
    const dailySheets = await createDailySheetsFromGoogle();
    return res.status(ApiResponseStatus.SUCCESS).json(dailySheets);
  } catch (e) {
    return res.status(ApiResponseStatus.INTERNAL_SERVER_ERROR).end();
  }
};

/**
 * Return DailySheetList that extracted from google spreadsheet
 * @link https://github.com/googleapis/google-api-nodejs-client#using-api-keys
 * @returns {Promise<DailySheet[]>}
 */
async function createDailySheetsFromGoogle() {
  const googleSheets = google.sheets({
    version: 'v4',
    auth: config.google.spreadsheet.apiKey
  });

  const spreadsheet = await getSpreadsheet(googleSheets);
  const dailySheets = [];

  // TODO - change one sheet(sheets[0]) to all sheet
  for (const sheet of [spreadsheet.sheets[0]]) {
    const id = sheet.properties.sheetId.toString();
    const title = sheet.properties.title;

    const valueRange = await getSheetValueRange(googleSheets, title);
    // To get rows of daily log sheets, find start row index.
    // Note: the frozenRowCount starts from 1
    const startRowNo = sheet.properties.gridProperties.frozenRowCount;
    const logs = createDailyLogList(valueRange.values, startRowNo, id);

    dailySheets.push(new DailySheet(id, title, logs));
  }

  return dailySheets;
}

/**
 * Return the list that includes Daily Log
 * @param sheetRows
 * @param startRowNo
 * @param id
 * @returns {DailyLog[]}
 */
function createDailyLogList(sheetRows, startRowNo, id) {
  const logs = [];
  for (let i = startRowNo; i < sheetRows.length; i++) {
    const rangeValue = sheetRows[i];
    if (Object.keys(rangeValue).length === 0) continue;

    logs.push(createDailyLog(rangeValue, id));
  }
  return logs;
}

/**
 * Return created DailyLog object after distinguishing specific column in 2020.
 * The reason
 * - there are two columns of the content(ko, en),
 * - so I except the content of the Korean version.
 * @param column
 * @param id
 * @returns {DailyLog}
 */
function createDailyLog(column, id) {
  const SHEET_ID_2020_YEAR = '960931952';
  // column[3] is the content(ko) so it is ignored
  const sheet2020YearValues = [
    column[0], column[1], column[2], column[4], column[5]
  ];

  return id === SHEET_ID_2020_YEAR
    ? new DailyLog(...sheet2020YearValues)
    : new DailyLog(...column);
}

/**
 * Return all sheet information using a spreadsheet key
 * spreadsheets.get() reference
 * @link https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get?apix_params=%7B%22spreadsheetId%22%3A%221z5zB5Vz-mRh9Um0c4YAwsf6TtVVyBKFP1I_hlsAdJRo%22%2C%22includeGridData%22%3Atrue%7D
 * @returns {Promise<Schema$Spreadsheet>}
 */
async function getSpreadsheet(sheets) {
  let data = null;

  try {
    const request = { spreadsheetId: config.google.spreadsheet.sheetId };
    data = (await sheets.spreadsheets.get(request)).data;
    return data;
  } catch (e) {
    console.error(e);
    return data;
  }
}

/**
 * Return all rows of the sheet named by the title
 * values.get() reference
 * - https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/get
 * @returns {Promise<Schema$ValueRange>}
 */
async function getSheetValueRange(sheets, title) {
  let data = null;

  try {
    // If the count of columns is over than 'ZZ' column,
    // 'ZZ' should is changed to the last column.
    const range = `${title}!A:ZZ`;
    const request = {
      spreadsheetId: config.google.spreadsheet.sheetId,
      range
    };
    data = (await sheets.spreadsheets.values.get(request)).data;
    return data;
  } catch (e) {
    console.error(e);
    return data;
  }
}

module.exports = { index };
