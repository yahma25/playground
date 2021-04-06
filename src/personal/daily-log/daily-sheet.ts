'use strict';

import DailyLog from './daily-log';

/**
 * One sheet that includes Daily Log
 */
class DailySheet {
  constructor(
    private readonly id: string,
    private readonly title: string,
    private logs: Array<DailyLog>) {
  }

  public static createFromJson(obj: DailySheet): DailySheet {
    return new DailySheet(obj.id, obj.title, obj.logs.map(log => DailyLog.createFromJson(log)));
  }

  public getId(): string {
    return this.id;
  }

  public getTitle(): string {
    return this.title;
  }

  /**
   * Return a month list of date
   * Note: elements are sorted
   * @returns {Number[]}
   */
  public getMonths(): Array<number> {
    const monthSet = new Set(this.logs.map(log => log.getMonth()));
    return Array.from(monthSet.keys()).sort();
  }

  /**
   * Return a category name list
   * @returns {string[]}
   */
  public getCategoryNames(): Array<string> {
    const categorySet = new Set(this.logs.map(log => log.getCategory()));
    return Array.from(categorySet.keys());
  }

  /**
   * Return all count of the category from all log list
   * @param category
   * @returns {number}
   */
  public getCountOfCategory(category: string): number {
    return this.logs.filter(log => log.getCategory() === category).length;
  }

  /**
   * Return all count of the category that included by the month from all log list
   * @param month
   * @param category
   * @returns {number}
   */
  public getCountOfCategoryOfMonth(month: number, category: string): number {
    return this.logs.filter(log =>
      log.getMonth() === month
      && log.getCategory().toLowerCase() === category.toLowerCase()).length;
  }
}

export default DailySheet;
