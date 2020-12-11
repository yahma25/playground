/**
 * express reference
 * @link https://expressjs.com/en/api.html#express
 */

const express = require('express');
const server = express();
const port = 3000;

const fs = require('fs');

server.get('/', (req, res) => {
  fs.readFile('index.html', (error, data) => {
    if (error) {
      console.error(error);
    } else {
      res.set({
        'Content-Type': 'text/html'
      })
        .status(200)
        .end(data);
    }
  });
});

server.listen(port, () => {
  console.log('Running Server!');
});

module.exports = server;
