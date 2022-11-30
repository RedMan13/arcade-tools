
const EXPRESS = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
var path = require('path');
const EXPRESS_app = EXPRESS();
let WEBSITE_HOSTING_PORT = 8080

EXPRESS_app.use(cors());
EXPRESS_app.use(bodyParser.urlencoded({
  extended: false
}));
EXPRESS_app.use(bodyParser.json());

EXPRESS_app.get('/', async function(req, res) {
  res.send(String('Hey!'))
})


EXPRESS_app.listen(WEBSITE_HOSTING_PORT);