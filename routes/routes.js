const express = require('express');
const route = express.Router();
const {signup} = require('../controllers/controller');
const {userSignupValidator} = require('../validator/index');

route.post("/signup", userSignupValidator, signup);

module.exports = route;