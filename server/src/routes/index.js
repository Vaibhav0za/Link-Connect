import express from "express";
import { getPosts, uploadPost } from "../controller/index.js";
import multer from "multer";
import path from "path";
const router = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get("/", (req, res) => {
  res.send("Namaste Bharat!");
});
router.get("/getPost", getPosts);

router.post("/uploadPost", upload.single("postImg"), uploadPost);

export default router;
