const express = require('express');
const router = express.Router();
const prove10Controller = require('../controllers/prove10.js');

router.get('/prove10/', prove10Controller.getProve10);
router.get('/fetchAll', prove10Controller.fetchAll);
router.post('/insertName', prove10Controller.insertName);

module.exports = router;