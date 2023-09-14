const express = require('express');
const router = express.Router();

const aController = require('../controllers/a_controller');

router.get('/add', aController.action);

module.exports = router;
