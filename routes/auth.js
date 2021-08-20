const express = require('express');
const route = express.Router();
const {userById} = require('../controllers/auth');
const {requireSign} = require('../controllers/controller');

route.param('userId', userById);
route.get('/secret/:userId', requireSign(req, res) => {

});

module.exports = route;