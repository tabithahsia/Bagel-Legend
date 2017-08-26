const express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/', function (req, res) {
  res.send('This is the server')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
