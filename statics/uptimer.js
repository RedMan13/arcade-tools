
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const { exec } = require("child_process")
let WEBSITE_HOSTING_PORT = 8080

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.get('/', async function(req, res) {
    res.send('Hey!')
})
app.post('/', (req, res) => {
    if (String(req.body.auth) !== process.env['github auth']) {
        res.status(401)
        res.send('unauthorized request')
        return
    }
    stop()
    res.send(exec('git pull'))
    require('../index.js')
})


app.listen(WEBSITE_HOSTING_PORT);