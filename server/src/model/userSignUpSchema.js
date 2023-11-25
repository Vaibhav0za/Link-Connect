import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: String,
  fullName: String,
  age: Number,
  country: String,
  mobileNumber: String,
  password: String,
});

const USER = mongoose.model("users", userSchema);

export default USER;
