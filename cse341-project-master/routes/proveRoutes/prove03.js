const express = require('express');
const router = express.Router();
const https = require('https');
let items = [];
let searchValue = '';

router.post('/search', (req, res, next) => {
    searchValue = req.body.searchValue;
    res.redirect('/proveRoutes/prove03/', 302);
});

router.get('/', (req, res, next) => {
    https.get('https://rodeeo.github.io/CSE341-S2021/cse341-project-master/public/data/shopping.json', (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            items = (JSON.parse(data));
            res.render('pages/prove03', {
                title: 'Prove 03',
                path: '/proveRoutes/prove03', // For pug, EJS
               // activePROVE03: true, // For HBS
                contentCSS: true, // For HBS
                items: items,
                searchValue: searchValue
            });
        });
    });
});

module.exports = router;