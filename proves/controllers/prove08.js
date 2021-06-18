exports.getHome = (req, res, next) => {
        res.render('index', {
          prods: products,
          pageTitle: 'Home',
          path: '/'
        });
  };

const ITEMS_PER_PAGE = 10;

//Connnect to the API
const fetch = require('node-fetch');

let url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";

let settings = {
  method: "Get"
};

fetch(url, settings)
  .then(res => res.json())
  .then((json) => {
    global.products = json;
    // console.log(json)
  });

const renderIndex = async (req, res, json) => {
  console.log('we get here');
  let searchedValue = req.body.searchValue || req.query.searchValue || '' // Handle for GET, POST or neither
  let page = req.query.page || 1 // Grab our page number, 1 if undefined

  const indexStart = (page - 1) * ITEMS_PER_PAGE // Item index to start on...
  const indexEnd = page * ITEMS_PER_PAGE
  // const jsonResponse = req.url;

  const filteredData = global.products.filter(x =>
    x.name.toLowerCase().includes(searchedValue.toLowerCase())
  )

  let prove = {
    data: filteredData.slice(indexStart, indexEnd), 
    pageTitle: 'Prove 08',
    searchedValue: searchedValue,
    page: page,
    numPages: Math.ceil(filteredData.length / ITEMS_PER_PAGE)
  }

  res.render('prove08/product-list', prove)
}

exports.getIndex = (req, res, next) => {
  renderIndex(req, res, global.jsonResponse)
}

exports.processJson = (req, res, next) => {
  renderIndex(req, res, global.jsonResponse) 
}