const Post = require('../models/Post');
const verificarPalabrasProhibidas = require('../utils/verificarPalabrasProhibidad');

// Obtener todas las publicaciones del foro
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('comments');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener detalles de una publicación específica
exports.getPostDetails = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId).populate('comments');
    if (!post) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva publicación en el foro
exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    
    // Verificar si el contenido contiene palabras prohibidas
    if (!verificarPalabrasProhibidas(content)) {
      return res.status(400).json({ message: 'El contenido contiene palabras prohibidas' });
    }

    const newPost = await Post.create({ title, content, author });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Agregar un comentario a una publicación
exports.addCommentToPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text, author } = req.body;

    // Verificar si el comentario contiene palabras prohibidas
    if (!verificarPalabrasProhibidas(text)) {
      return res.status(400).json({ message: 'El comentario contiene palabras prohibidas' });
    }

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Publicación no encontrada' });
    }

    post.comments.push({ text, author });
    await post.save();

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
