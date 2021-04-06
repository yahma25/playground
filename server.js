'use strict';

/**
 * express reference
 * @link https://expressjs.com/en/api.html#express
 */
import express from 'express';
import path from 'path';
import fs from 'fs';

import ServerConfig from './config/server-config'
import ApiRouter from './api/api-router';

const server = express();

/* [global setting] */
// Load a local config file for the security
ServerConfig.init(JSON.parse(fs.readFileSync('./config/api-config.json')));

// middleware
const publicPath = path.join(__dirname, 'public/');
// Set static path to get static resources from the public path
server.use(express.static(publicPath));
server.use(express.static(path.join(__dirname, 'src/')));

// api
new ApiRouter().getApiRoutersOfControllers()
  .forEach(routerParam => server.use(`/api${routerParam.path}`, routerParam.router));

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

server.listen(ServerConfig.getPort(), () => {
  console.log(`Server is running! port:${ServerConfig.getPort()}`);
});

module.exports = server;
