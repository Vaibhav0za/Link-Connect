import post from "../model/postModel.js";

export const getPosts = async (req, res) => {
  try {
    const allPosts = await post.find();
    console.log("allPosts =====>>>>>  get All Posts");
    res.status(200).json({ allPosts, message: "Post found" , status:true });
  } catch (err) {
    console.log("err =====>>>>> ", err);
    res.status(409).json({ message: err.message });
  }
};

export const uploadPost = async (req, res) => {
  const postData = req.body;
  console.log(postData);
  const newPost = new post(postData);

  try {
    await newPost.save();
    res.status(201).json({ newPost, message: "Post" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
