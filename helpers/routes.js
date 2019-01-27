'use strict';

const directory = require('require-dir');

function route(app) {
  var routes = directory('../src/v1/routes');
  for (var i in routes) app.use('/v1', routes[i]);
}

module.exports = {
  route
};
