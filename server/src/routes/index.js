import express from "express";
import {
  getPosts,
  uploadPost,
  signUpUser,
  login,
} from "../controller/index.js";
import multer from "multer";
import path from "path";
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("Namaste Bharat!");
});

router.post("/sign-up", signUpUser);
router.post("/login", login);

router.get("/getPost", getPosts);

router.post("/uploadPost", upload.single("image"), uploadPost);

export default router;
