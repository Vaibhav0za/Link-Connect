import express from "express";
import Connection from "./src/database/index.js";
import dotenv from "dotenv";
import Router from "./src/routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT : ${PORT}`));
Connection(process.env.DB_USERNAME, process.env.DB_PASSWORD);
