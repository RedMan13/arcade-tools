const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
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
    res.send(imports.exec('git pull'))
    throw new Error('restarting...')
})


app.listen(WEBSITE_HOSTING_PORT);