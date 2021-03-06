'use strict';

/**
 * This is a daily log router
 */

import express from 'express';
import controller from './daily-log-controller';

const router = express.Router();

router.get('/', controller.index);

module.exports = router;
