import DailySheet from '../../personal/daily-log/daily-sheet';

/**
 * This page shows my daily logs from google spread sheet
 * Chart: Implement using Library(TOAST UI - Chart)
 * - https://github.com/nhn/tui.chart/blob/main/docs/en/chart-column.md
 * - https://github.com/nhn/tui.chart/blob/main/docs/ko/chart-column.md
 */
class DailyLogPage {
  /**
   * TODO - Simplify, Modularization, Asynchronous rendering, Using http request library
   * @returns {HTMLDivElement}
   */
  public render() {
    const element = document.createElement('div');
    element.className = 'dailylog-page-container';
    element.style.width = '70vw';
    element.style.height = '50vh';
    element.innerText = 'Loading...';

    // TODO - change asynchronous rendering using a state
    // TODO - change XMLHttpRequest to axios library
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'api/personal/dailylog');
    xhr.onload = (ev: any) => {
      const dailyLogSheets: Array<DailySheet> = Array
        .from(JSON.parse(ev.currentTarget.response))
        .map(sheet => DailySheet.createFromJson(sheet as DailySheet));

      const sheet2021 = dailyLogSheets.find(sheet => sheet.getId() === '467902381');
      if (!sheet2021) return;

      // Change JSON to Class to use class's method
      const sheet: DailySheet = dailyLogSheets[0];

      const months = sheet.getMonths();
      const categoryTypes = sheet.getCategoryNames().map(categoryName => {
        return {
          name: categoryName,
          data: months.map(month =>
            sheet.getCountOfCategoryOfMonth(month, categoryName))
        };
      });

      const data = {
        categories: months,
        series: categoryTypes
      };

      const title = `${sheet2021.getTitle()} Monthly`;

      const theme = {
        series: {
          // order: 'study', 'exercise', 'private'
          colors: ['#93c47d', '#6d9eeb', '#cccccc']
        }
      }

      const options = {
        theme,
        series: {
          stack: true,
          dataLabels: { visible: true },
          // To show labels when hovering over the column of the month
          eventDetectType: 'grouped'
        },
        chart: { title, width: 'auto', height: 'auto' },
        xAxis: { title: { text: 'Library: TOAST UI Chart' } }
      };

      // const chart = toastui.Chart.columnChart({ el, data, options });

      // To render asynchronous rendering
      window.setTimeout(() => {
        element.innerText = '';
        // @ts-ignore
        toastui.Chart.columnChart({ el: element, data, options });
      }, 0);
    }

    xhr.send();

    return element;
  }
}

export default DailyLogPage;
