const express = require('express');
const postController = require('../controller/post_controller');
const router = express.Router();

router.get('/', postController.showIndex);

module.exports = router;

