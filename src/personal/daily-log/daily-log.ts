'use strict';

/**
 * One action log of a day
 */
class DailyLog {
  constructor(
    private readonly date: string,
    private readonly category: string,
    private readonly section: string,
    private readonly content: string,
    private readonly state: string,
    private readonly note?: string) {
  }

  public static createFromJson(obj: DailyLog): DailyLog {
    return new DailyLog(obj.date, obj.category, obj.section, obj.content, obj.state, obj.note);
  }

  /**
   * Return a date as Date class object
   * @returns {Date}
   */
  public getDate(): Date {
    return new Date(this.date);
  }

  /**
   * Return a month of date.
   * Note: it starts 0
   * @returns {number}
   */
  public getMonth(): number {
    return this.getDate().getMonth() + 1;
  }

  /**
   * Return a category name
   * @returns {string}
   */
  public getCategory(): string {
    return this.category;
  }
}

export default DailyLog;
