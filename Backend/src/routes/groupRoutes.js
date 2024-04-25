const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.post('/create', groupController.createGroup);
router.post('/join', groupController.joinGroup);
router.post('/:groupId/posts/create', groupController.createPost);
router.post('/:groupId/posts/:postId/comments/create', groupController.createComment);

module.exports = router;
