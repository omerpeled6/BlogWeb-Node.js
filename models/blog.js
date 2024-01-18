const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Build Scema
const blogScrema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    snippet: {
      type: String,
      require: true,
    },
    body: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// enter the Scema and name
const Blog = mongoose.model('Blog', blogScrema);
module.exports = Blog;
