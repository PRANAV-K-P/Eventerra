const express = require('express');
const router = express.Router();

const controller = require('../controllers/event.controller');
const validateUserToken = require('../middleware/validateUserToken');

router.get('/',validateUserToken, controller.getEvent);

router.post('/create',validateUserToken, controller.createEvent);


module.exports = router;