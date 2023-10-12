import express from "express";
import dotenv from "dotenv";

// imported routes
import router from "./routes/index.js";

dotenv.config();

const port = process.env.port || 3000;

// define express
const app = express();

// use json to handel data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use("/", router);

// listen to server
app.listen(port, function () {
    console.log("Server listening on port " + port + "...");
});
