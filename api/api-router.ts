import express from 'express';
import DailyLogController from './personal/daily-log/daily-log-controller';

export interface RouterParam {
  path: string;
  router: express.Router;
}

/**
 * This provides all of api routers
 */
class ApiRouter {
  public getApiRoutersOfControllers(): Array<RouterParam> {
    return [
      { path: '/personal/dailylog', router: new DailyLogController().getRouter() }
    ];
  }
}

export default ApiRouter;
