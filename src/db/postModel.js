const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = {
  Posts,
};
