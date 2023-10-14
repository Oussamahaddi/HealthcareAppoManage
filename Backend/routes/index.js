import express from "express";
import Succurcal from "./SuccurcalRoutes.js";
import Service from "./ServiceRoutes.js";
import Client from "./ClientRoutes.js"
import User from "./UserRoutes.js";
import Admin from "./AdminRoutes.js"

const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/client", Client);
router.use("/service", Service);
router.use("/user", User);
router.use("/Admin",Admin)

export default router;
