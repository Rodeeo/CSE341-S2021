const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');

var jsonEngine = require('../controllers/shop');
router.get('/', shopController.getHome);
router.get('/prove08', jsonEngine.processJson)
      .post('/prove08', jsonEngine.getIndex)

module.exports = router;