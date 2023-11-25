import post from "../model/postModel.js";
import Image from "../model/imageSchema.js";
import USER from "../model/userSignUpSchema.js";

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
  console.log("signUpUser =====>", req.body);
  try {
    const { username, fullName, age, country, mobileNumber, password } =
      req.body;

    const existingUser = await USER.findOne({ username });
    if (existingUser) {
      console.log("existing");
      return res.status(400).json({
        message: "Username is already taken. Please choose a different one.",
      });
    }

    const newUser = new USER({
      username,
      fullName,
      age,
      country,
      mobileNumber,
      password,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User successfully created.", status: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", status: false });
  }
};

export const uploadPost = async (req, res) => {
  try {
    const newImage = new Image({
      filename: req.file.originalname,
      path: req.file.path,
    });

    await newImage.save();

    res.send("Image uploaded successfully!");
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).send("Internal Server Error");
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await USER.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (password !== user.password) {
      return res.status(401).json({ message: "Invalid password" });
    }
    return res
      .status(200)
      .json({ message: "Login successful" /*, token: token */ });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
