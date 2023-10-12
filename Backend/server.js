import express from "express";
import dotenv from "dotenv";

// imported routes
import SuccurcalRoutes from "./routes/SuccurcalRoutes.js";

dotenv.config();

const port = process.env.port || 3000;

// define express
const app = express();

// use json to handel data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use("/Succurcal", SuccurcalRoutes);

// listen to server
app.listen(port, function () {
    console.log("Server listening on port " + port + "...");
});
