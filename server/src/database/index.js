import mongoose from "mongoose";
const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.qlxza7x.mongodb.net/?retryWrites=true&w=majority_write`;
  try {
    await mongoose.connect(URL);
    console.log("HELLO VAIBHAV, DATABASE CONNECTED SUCCESSFULLY");
  } catch (err) {
    console.log("ERROR WHILE CONNECTING DATABASE => ", err);
  }
};
export default Connection;