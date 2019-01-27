'use strict';

const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: {
        type: String,
        index: true
    },
    story: {
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }
},
    {
        timestamps: true
    });

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;
