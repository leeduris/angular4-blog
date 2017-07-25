const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
  category: String,
  theme: String,
  iframeurl: String,
  iframestyle: {},
  scrolling:String,
  topic:String,
  title: String,
  desc: String,
  tag: String,
  date: String,
  context: String
});

module.exports = mongoose.model('posts', postSchema);
