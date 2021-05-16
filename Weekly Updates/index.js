// // Our initial setup (package requires, port number setup)
// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const PORT = process.env.PORT || 5000 // So we can run on heroku || (OR) localhost:5000
// const mongoConnect = require('./util/database');

// const app = express();

// // Route setup. You can implement more in the future!
// const ta01Routes = require('./routes/groupRoutes/ta01');
// const ta02Routes = require('./routes/groupRoutes/ta02');
// const ta03Routes = require('./routes/groupRoutes/ta03'); 
// const ta04Routes = require('./routes/groupRoutes/ta04'); 
// const prove01 = require('./routes/proveRoutes/prove01');
// const prove02 = require('./routes/proveRoutes/prove02');
// const prove03 = require('./routes/proveRoutes/prove03');



// app.use(express.static(path.join(__dirname, 'public')))
//    .set('views', path.join(__dirname, 'views'))
//    .set('view engine', 'ejs')
//    // For view engine as Pug
//    //.set('view engine', 'pug') // For view engine as PUG. 
//    // For view engine as hbs (Handlebars)
//    //.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})) // For handlebars
//    //.set('view engine', 'hbs')
//    .use(bodyParser.urlencoded({ extended: false})) // For parsing the body of a POST
//    .use('/groupRoutes/ta01', ta01Routes)
//    .use('/groupRoutes/ta02', ta02Routes) 
//    .use('/groupRoutes/ta03', ta03Routes) 
//    .use('/groupRoutes/ta04', ta04Routes)
//    .use('/proveRoutes/prove01', prove01)
//    .use('/proveRoutes/prove02', prove02)
//    .use('/proveRoutes/prove03', prove03)
//    .get('/', (req, res, next) => {
//      // This is the primary index, always handled last. 
//      res.render('pages/index', {title: 'Welcome to my CSE341 repo', path: '/'});
//     })
//    .use((req, res, next) => {
//      // 404 page
//      res.render('pages/404', {title: '404 - Page Not Found', path: req.url})
//    })
//    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

// const cors = require('cors') // Place this with other requires (like 'path' and 'express')

// const corsOptions = {
//     origin: "https://<your_app_name>.herokuapp.com/",
//     optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

// const options = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     family: 4
// };

// const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://<username>:<username>@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";
 
// mongoConnect(client => {
//   console.log(client); 
//   app.listen(5000);
// });