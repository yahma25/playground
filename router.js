'use strict';

import dailyLogRouter from './api/personal/daily-log';

/**
 * Return all routers of the APIs
 * @returns {{path: string, handler: Router}[]}
 */
function getApiList() {
  return [
    { path: composePath('/personal/dailylog'), handler: dailyLogRouter }
  ];
}

/**
 * Return the API path to minimize duplication
 * @param path
 * @returns {string}
 */
function composePath(path) {
  return `/api${path}`;
}

module.exports = { getList: getApiList };
