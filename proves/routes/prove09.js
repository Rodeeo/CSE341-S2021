const express = require('express');

const path = require('path');

const prove09Controller = require('../controllers/prove09');

const router = express.Router();

router.get('/prove09/', prove09Controller.getPokemon);

module.exports = router;