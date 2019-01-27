'use strict';

const PostService = require('../../services/post.service');

function createPost(req, res, next) {
    if (req.body.category === 'english' || req.body.category === 'nepali' || req.body.category === 'hindi') {
        PostService.create(req.body)
            .then(postCreated => {

                res.send({
                    message: 'Post Created Successfully!',
                    data: postCreated,
                    success: true
                })
            })
            .catch(err => {
                next(err);
            })
    } else {
        res.send('Cannot find category name!');
    }
}

function listPost(req, res, next) {
    PostService.list(req.query)
        .then(listedpost => {
            PostService.countAll()
                .then(count => {
                    res.send({
                        message: 'Post listed Successfully!',
                        data: listedpost,
                        total: count,
                        success: true
                    })
                })
        })
        .catch(err => {
            next(err);
        })
}

function deletePost(req, res, next) {
    PostService.findAndDelete(req.params.id)
        .then(() => {
            res.send({
                message: 'Post deleted Successfully!',
                success: true
            })
        })
        .catch(err => {
            next(err);
        })
}

function fetchDetail(req, res, next) {
    PostService.findOne({ _id: req.params.id })
        .then(postDetail => {
            res.send(postDetail)
        })
        .catch(err => {
            next(err);
        })
}

function updatePost(req, res, next) {
    PostService.update(req.params.id, req.body)
        .then(updatedPost => {
            res.send({
                message: 'Post udpdated successfully!',
                success: true
            });
        })
        .catch(err => {
            next(err);
        })
}

function findByCategoryName(req, res, next) {
    PostService.findByCategoryName({ category: req.query.category })
        .then(categorylists => {
            res.send({
                data: categorylists,
                message: 'listed successfully!',
                success: true
            })
        })
        .catch(err => {
            next(err);
        })
}

module.exports = {
    createPost,
    listPost,
    deletePost,
    fetchDetail,
    updatePost,
    findByCategoryName
};