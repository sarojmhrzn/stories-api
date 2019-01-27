"use strict";

const Story = require('../models/stories.model');

function create(model, saveObj) {
    return new Promise((resolve, reject) => {
        let mod = new model(saveObj)
        mod.save()
            .then(postCreated => {
                resolve(postCreated);
            })
            .catch(err => {
                reject(err);
            })

    })
}

function list(params) {
    return new Promise((resolve, reject) => {
        Story.find()
            .populate('comments')
            .exec(function (err, list) {
                if (err) {
                    reject(err);
                } else {
                    resolve(list);
                }
            })
    })
}

function findAndDelete(params) {
    return new Promise((resolve, reject) => {
        Story.findByIdAndDelete(params)
            .then(deletedPost => {
                resolve(deletedPost)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function findById(params) {
    return new Promise((resolve, reject) => {
        Story.findById(params)
            .then(fetchedPost => {
                resolve(fetchedPost)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function findByCategoryName(params) {
    return new Promise((resolve, reject) => {
        Story.find(params)
            .then(posts => {
                resolve(posts)
            })
            .catch(err => {
                reject(err)
            })
    })
}

function update(id, data) {
    return new Promise((resolve, reject) => {
        Story.findByIdAndUpdate(id, data)
            .then(updatedPosts => {
                resolve(updatedPosts)
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    create,
    list,
    findById,
    findAndDelete,
    findByCategoryName,
    update
};