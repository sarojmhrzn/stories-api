'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const cors = require('cors');
const express = require('express');

const envConfig = require('./config/env');

require('./src/models/db.model')();

const app = express();
app.use(cors());
app.options('*', cors());

const bodyParser = require('body-parser');

var port = process.env.PORT || envConfig.get("PORT");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

// Authorize routes
app.use(require('./helpers/checkToken'));

// Include all routes
require('./helpers/routes').route(app);

app.get('/', function (req, res) {
  res.send("hello world")
})

app.listen(port, () => {

  console.log(`Server is running at port ${port}`);
});