import express from 'express';

/**
 * This provides common features of Controllers
 */
abstract class Controller {
  protected readonly router: express.Router;

  protected constructor() {
    this.router = express.Router();
  }

  public getRouter(): express.Router {
    return this.router;
  }
}

export default Controller;
