'use strict';

const mongoose = require('mongoose');

const envConfig = require('../../config/env');

const stories = require('./stories.model');
const comment = require('./comments.model');

module.exports = function () {
    mongoose.connect(envConfig.get('MONGODB_URI'));
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('stories db opened');
    });
};
