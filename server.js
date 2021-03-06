'use strict';

/**
 * express reference
 * @link https://expressjs.com/en/api.html#express
 */
import express from 'express';
import path from 'path';
import fs from 'fs';

import router from './router';

import globalConfig from './server-config';

const server = express();

/**
 * [global setting]
 */
// Load local a config file
// Note: do not use import('./server-config') because that handles as an asynchronous
global.config = globalConfig;

// middleware
const publicPath = path.join(__dirname, 'public/');
// Set static path to get static resources from the public path
server.use(express.static(publicPath));
server.use(express.static(path.join(__dirname, 'src/')));

// api
router.getList().forEach(route => server.use(route.path, route.handler));

const routeMainIndexPage = (res) => {
  const mainFilePath = path.join(publicPath, 'index.html');
  fs.readFile(mainFilePath, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).end();
      return;
    }

    res.set({ 'Content-Type': 'text/html' }).status(200).end(data);
  });
};

server.get('/', (req, res) => {
  routeMainIndexPage(res);
});

server.get('/dailylog', (req, res) => {
  routeMainIndexPage(res);
});

server.get('/about', (req, res) => {
  const profileFilePath = path.join(publicPath, 'profile/index.html');
  fs.readFile(profileFilePath, (err, data) => {
    err
      ? res.redirect('/')
      : res.set({ 'Content-Type': 'text/html' }).status(200).end(data);
  });
});

server.listen(config.port, () => {
  console.log('Server is running!');
});

module.exports = server;
