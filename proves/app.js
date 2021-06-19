const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const app = express();

const corsOptions = {
    origin: "https://cse341-proves-rodee.herokuapp.com/",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const shopRoutes = require('./routes/prove08');
const pokeRoutes = require('./routes/prove09');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use(pokeRoutes);

app.listen(PORT);