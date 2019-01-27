const express = require('express'),
  router = express.Router();

const PostController = require('../controllers/post.controller');


router.post('/story', PostController.createPost);
router.get('/stories', PostController.listPost);
router.get('/story/:id', PostController.fetchDetail);
router.get('/storywithcategory', PostController.findByCategoryName);
router.patch('/story/:id', PostController.updatePost);
router.delete('/story/:id', PostController.deletePost);


module.exports = router;