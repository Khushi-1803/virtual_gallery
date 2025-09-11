const serverless = require('serverless-http');
const express = require('express');
const app = require('../app.js'); // your existing Express app

module.exports = serverless(app);
