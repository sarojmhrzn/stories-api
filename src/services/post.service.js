"use strict";

const Story = require('../models/stories.model');

function create(postParams) {
  return new Promise((resolve, reject) => {
    let post = new Story(postParams);
    post.save()
      .then(postCreated => {
        resolve(postCreated);
      })
      .catch(err => {
        reject(err);
      })

  })
}

function list(query) {
  return new Promise((resolve, reject) => {
    const perPage = +query.limit;
    const page = Math.max(0, +query.pageno - 1);
    Story.find()
      .limit(perPage)
      .skip(perPage * page)
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

function findOne(params) {
  return new Promise((resolve, reject) => {
    Story.findOne(params)
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

/**
 *
 * @returns {*}
 */
function countAll() {
  return Story.count();
}

module.exports = {
  create,
  list,
  findOne,
  findAndDelete,
  findByCategoryName,
  update,
  countAll
};