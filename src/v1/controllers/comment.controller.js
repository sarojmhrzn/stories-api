'use strict';

const PostService = require('../../services/post.service');
const CommentService = require('../../services/comment.service');

function createComment(req, res, next) {
    PostService.findOne({ _id: req.params.id })
        .then(story => {
            const createObj = {
                comment: req.body.comment,
                story: req.params.id
            }
            CommentService.create(createObj)
                .then(commentCreated => {
                    story.comments.push(commentCreated)
                    PostService.update(story._id, story)
                        .then(() => {
                            res.send({
                                data: commentCreated,
                                message: 'created successfuly'
                            })
                        })
                })
                .catch(err => {
                    next(err);
                })
        })
}

function list(req, res, next) {
    CommentService.list()
        .then(response => {
            res.send({
                data: response,
                message: 'Listed successfully!'
            })
        })
        .catch(err => {
            next(err);
        })
}

function findOne(req, res, next) {
    CommentService.findOne({ _id: req.params.id })
        .then(response => {
            res.send({
                data: response,
                message: 'Listed successfully!'
            })
        })
        .catch(err => {
            next(err);
        })
}

function deleteOne(req, res, next) {
    CommentService.remove({ _id: req.params.id })
        .then(response => {
            res.send({
                message: 'deleted successfully!'
            })
        })
        .catch(err => {
            next(err);
        })
}

module.exports = {
    createComment,
    list,
    findOne,
    deleteOne
}