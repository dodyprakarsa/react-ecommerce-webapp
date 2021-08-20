const express = require('express');
const route = express.Router();
const {validationResult} = require('../validator');
const {signup, signin, signout} = require('../controllers/controller');

route.post("/signup", validationResult, signup);
route.post("/signin", signin);
route.get("/signout", signout);

module.exports = route;