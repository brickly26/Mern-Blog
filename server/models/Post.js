const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  author: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: 'You need a title!',
    trim: true,
    minlength: 1,
  },
  body: {
    type: String,
    required: 'You need a body',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      body: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;