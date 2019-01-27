const express = require('express'),
  router = express.Router();

const CommentController = require('../controllers/comment.controller');


router.post('/comment/:id', CommentController.createComment);
router.get('/comments', CommentController.list);
router.get('/comment/:id', CommentController.findOne);
// router.get('/storywithcategory', PostController.findByCategoryName);
// router.patch('/story/:id', PostController.updatePost);
router.delete('/comment/:id', CommentController.deleteOne);


module.exports = router;