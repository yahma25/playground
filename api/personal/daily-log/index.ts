'use strict';

import express from 'express';
import DailyLogController from './daily-log-controller';

/**
 * This is a daily log router
 */

const controller: DailyLogController = new DailyLogController();

const router = express.Router();
router.get('/', controller.index);
