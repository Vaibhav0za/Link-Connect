import mongoose from "mongoose";

const ImageDetailsScehma = new mongoose.Schema(
  {
    image: String,
  },
  {
    collection: "ImageDetails",
  }
);
const img = mongoose.model("ImageDetails", ImageDetailsScehma);
export default img;
