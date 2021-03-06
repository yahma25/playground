'use strict';

/**
 * One action log of a day
 */
class DailyLog {
  constructor(date, category, section, content, state, note) {
    this.date = date;
    this.category = category;
    this.section = section;
    this.content = content;
    this.state = state;
    this.note = note;
  }

  /**
   * Return a date as Date class object
   * @returns {Date}
   */
  getDate() {
    return new Date(this.date);
  }

  /**
   * Return a month of date.
   * Note: it starts 0
   * @returns {number}
   */
  getMonth() {
    return this.getDate().getMonth() + 1;
  }

  /**
   * Return a category name
   * @returns {string}
   */
  getCategory() {
    return this.category;
  }
}

module.exports = DailyLog;
