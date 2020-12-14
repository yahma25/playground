/**
 * express reference
 * @link https://expressjs.com/en/api.html#express
 */

const express = require('express');
const server = express();
const port = 3000;

const path = require('path');
const fs = require('fs');

// middleware...
const publicPath = path.join(__dirname, 'public/');
// Set static path to get static resources from the public path
server.use(express.static(publicPath));

server.get('/', (req, res) => {
  const mainFilePath = path.join(publicPath, 'index.html');
  fs.readFile(mainFilePath, (error, data) => {
    error
      ? console.error(error)
      : res.set({ 'Content-Type': 'text/html' }).status(200).end(data);
  });
});

server.get('/about', (req, res) => {
  const profileFilePath = path.join(publicPath, 'profile/index.html');
  fs.readFile(profileFilePath, (error, data) => {
    error
      ? res.redirect('/')
      : res.set({ 'Content-Type': 'text/html' }).status(200).end(data);
  });
});

server.listen(port, () => {
  console.log('Server is running!');
});

module.exports = server;
