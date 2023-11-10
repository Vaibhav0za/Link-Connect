import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  createdAt: String,
  postCaption: String,
  postImg: Object,
  postLocation: String,
});

const post = mongoose.model("posts", userSchema);

export default post;
