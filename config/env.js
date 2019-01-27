'use strict';

const path = require('path');

const nconf = module.exports = require('nconf');

const devRequiredParams = [
];

const requiredParams = [
  'PORT',
  'MONGODB_URI'
];


nconf
// 1. Command-line arguments
  .argv()
  // 2. Environment variables
  .env(requiredParams)
  // 3. Config file
  .file({
    file: path.join(__dirname, `${process.env.NODE_ENV}.json`)
  });

if (process.env.NODE_ENV === 'development') {
  requiredParams.concat(devRequiredParams);
}

requiredParams.forEach(function (param) {
  checkConfig(param);
});

function checkConfig(envVariable) {
  if (!nconf.get(envVariable)) {
    throw new Error(`You must set the ${envVariable} environment variable or add it to config/${process.env.NODE_ENV}.json!`);
  }
}