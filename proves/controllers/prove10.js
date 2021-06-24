const jsonData = require('../data/prove10.json');

exports.getProve10 = (req, res, next) => {
    res.render('prove10/avengers', {
        path:'/',
        pageTitle: 'Week 10 Prove Assignment',
    });
};

exports.fetchAll = (req, res, next) => {
    res.json(jsonData);
};

exports.insertName = (req, res, next) => {
    if (req.body.newName !== undefined) {
        const newName = req.body.newName
        if (!jsonData.avengers.some(a => a.name === newName)) {
            jsonData.avengers.push({ name: newName }) 
            res.sendStatus(200)
        }
    } else {
        res.sendStatus(400) // Bad request error code
    }
};