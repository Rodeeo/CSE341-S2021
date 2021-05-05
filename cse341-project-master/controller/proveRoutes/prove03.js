const express = require('express');
const fs = require('fs'); 
const router = express.Router();
const bodyParser = require('body-parser'); 
//const jsonfile = require('jsonfile');    

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended: true}))

//const file = '../public/data/bookData.json'


router.post('/books', (req,res,next)=>{
    
    if(req.body.bookTitle == ''){
        res.redirect('/prove03');
    }
    else if(req.body.bookDesc == ''){
        res.redirect('/prove03');
    }

});


router.get('/', (req, res, next) => {
    res.render('pages/prove03.ejs',{
        title: 'Prove 03',
        path: '/',
        contentCSS: true,
    })
    return res.end(); // Return so you don't execute remaining code outside of if statement
});

module.exports = router;