const express = require('express');
const route = express.Router();
const {controlApi} = require('../controllers/controller');

route.get("/", controlApi);

module.exports = route;