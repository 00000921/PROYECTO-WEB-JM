const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencia al modelo de usuario
  }],
  posts: [{
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Referencia al modelo de usuario
    },
    comments: [{
      content: String,
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencia al modelo de usuario
      },
    }],
  }],
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
