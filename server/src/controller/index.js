import post from "../model/postModel.js";
import img from "../model/imageSchema.js";

export const getPosts = async (req, res) => {
  try {
    const allPosts = await post.find();
    console.log("allPosts =====>>>>>  get All Posts");
    res.status(200).json({ allPosts, message: "Post found", status: true });
  } catch (err) {
    console.log("err =====>>>>> ", err);
    res.status(409).json({ message: err.message });
  }
};
export const signUpUser = async (req, res) => {


};

export const uploadPost = async (req, res) => {
  try {
    if (req.file) {
      const postData = {
        postImg: req.file.path,
        postCaption: req.body.postCaption,
        postLocation: req.body.postLocation,
        username: req.body.username,
      };

      const newPost = new img(postData);
      await newPost.save();

      // Update the image details in the ImageDetails collection
      const imageDetails = new ImageDetails({ image: req.file.path });
      await imageDetails.save();

      res.status(201).json({ newPost, message: "Post created successfully" });
    } else {
      res.status(400).json({ message: "No file uploaded." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
