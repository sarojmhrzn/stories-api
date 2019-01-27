'use strict';
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const StorySchema = new Schema({
    category: {
        type: String,
        index: true,
        required: true
    },
    title: {
        type: String,
        index: true,
        required: true,
        unique: true

    },
    post: {
        type: String,
        index: true,
        required: true
    },
    source: String,
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
});

const Story = mongoose.model('Story', StorySchema);

module.exports = Story;
