import express from "express";
import { getPosts ,uploadPost } from "../controller/index.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Namaste Bharat!");
});
router.get("/getPost", getPosts);

router.post("/uploadPost", uploadPost);


export default router;
