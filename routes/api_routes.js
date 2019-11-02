const express = require('express');
const postController = require('../controller/post_controller');
const router = express.Router();

router.get('/', postController.showIndex);
router.get('/posts', postController.showPost);
router.get('/post/:id', postController.singlePost);

router.post('/add-post', postController.addPost);

module.exports = router;

