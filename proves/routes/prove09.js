const express = require('express');
const app = express()

const controller = require('../controllers/prove09');

app.get('/prove09/', (req, res, next) => {
    res.render('prove09/welcomePage');
})
.get('/pokemon/:page', (req, res, next) => {
    const page = req.params.page;
    controller.getPokemon(page, (pokemon) => {
            res.render('prove09/poke', {
                pokemonList: pokemon,
                page: page
            });
    });
});

module.exports = app;