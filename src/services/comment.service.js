"use strict";

const Comment = require('../models/comments.model');

function create(commentParams) {
    return new Promise((resolve, reject) => {
        let comment = new Comment(commentParams);
        comment.save()
            .then(commentCreated => {
                resolve(commentCreated);
            })
            .catch(err => {
                reject(err);
            })
    })
}

function list() {
    return new Promise((resolve, reject) => {
        Comment.find()
            .populate('story')
            .exec(function (err, list) {
                if (err) {
                    reject(err);
                } else {
                    resolve(list);
                }
            })
    })
}

function findOne(params) {
    return new Promise((resolve, reject) => {
        Comment.findOne(params)
            .populate('story')
            .exec(function (err, list) {
                if (err) {
                    reject(err);
                } else {
                    resolve(list);
                }
            })
    })
}

function remove(params) {
    return new Promise((resolve, reject) => {
        Comment.findByIdAndDelete(params)
            .exec(function (err, list) {
                if (err) {
                    reject(err);
                } else {
                    resolve(list);
                }
            })
    })
}

module.exports = {
    create,
    list,
    findOne,
    remove
}