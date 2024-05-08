const mongoose = require("mongoose");

const PostSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user3",
    },
    image: {
      publicId: String,
      url: String,
    },
    caption: {
      type: String,
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user3",
      },
    ],
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user3",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post2", PostSchema);