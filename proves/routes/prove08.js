const express = require('express');
const router = express.Router();
const shopController = require('../controllers/prove08');

var jsonEngine = require('../controllers/prove08');
router.get('/', shopController.getHome);
router.get('/prove08', jsonEngine.processJson)
      .post('/prove08', jsonEngine.getIndex)

module.exports = router;