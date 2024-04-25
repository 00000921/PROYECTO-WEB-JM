const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');

// Obtener todas las publicaciones del foro
router.get('/posts', forumController.getAllPosts);

// Obtener detalles de una publicación específica
router.get('/posts/:postId', forumController.getPostDetails);

// Crear una nueva publicación en el foro
router.post('/posts', forumController.createPost);

// Agregar un comentario a una publicación
router.post('/posts/:postId/comments', forumController.addCommentToPost);

module.exports = router;
