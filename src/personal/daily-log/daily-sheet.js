'use strict';

/**
 * One sheet that includes Daily Log
 */
class DailySheet {
  constructor(id, title, logs) {
    this.id = id;
    this.title = title;
    this.logs = logs;
  }

  /**
   * Return a month list of date
   * Note: elements are sorted
   * @returns {Number[]}
   */
  getMonths() {
    const monthSet = new Set(this.logs.map(log => log.getMonth()));
    return Array.from(monthSet.keys()).sort();
  }

  /**
   * Return a category name list
   * @returns {string[]}
   */
  getCategoryNames() {
    const categorySet = new Set(this.logs.map(log => log.category));
    return Array.from(categorySet.keys());
  }

  /**
   * Return all count of the category from all log list
   * @param category
   * @returns {number}
   */
  getCountOfCategory(category) {
    return this.logs.filter(log => log.category === category).length;
  }

  /**
   * Return all count of the category that included by the month from all log list
   * @param month
   * @param category
   * @returns {number}
   */
  getCountOfCategoryOfMonth(month, category) {
    return this.logs.filter(log =>
      log.getMonth() === Number(month)
      && log.getCategory().toLowerCase() === category.toLowerCase()).length;
  }
}

module.exports = DailySheet;
