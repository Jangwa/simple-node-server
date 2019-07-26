// wiki.js - Wiki route module.

var express = require('express');
var ApiRouter = express.Router();

// Home page route.
ApiRouter.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
ApiRouter.get('/about', function (req, res) {
  res.send('About this wiki');
})

module.exports = ApiRouter;