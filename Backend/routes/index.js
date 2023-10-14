import express from "express";
import Succurcal from "./SuccurcalRoutes.js";
import Service from "./ServiceRoutes.js";
import User from "./UserRoutes.js";
import Admin from "./AdminRoutes.js"

const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/service", Service);
router.use("/user", User);
router.use("/Admin",Admin)

export default router;
