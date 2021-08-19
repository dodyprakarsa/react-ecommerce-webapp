const express = require('express');
const route = express.Router();
const {validationResult} = require('../validator');
const {signup} = require('../controllers/controller');

route.post("/signup", validationResult, signup);

module.exports = route;