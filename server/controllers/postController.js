const mongoose = require('mongoose');
const Post = require('../models/post');

// 1. Query the database for a list of all stores

exports.getPosts =  async (req, res, next) => {
  const posts = await Post.find({});
  res.json(posts);
};

exports.addPost = async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.redirect('back');
};


  