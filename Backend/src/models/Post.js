const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  author: String
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  comments: [commentSchema]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
