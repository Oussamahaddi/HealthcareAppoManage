import express from "express";
import Succurcal from "./SuccurcalRoutes.js";
import Service from "./ServiceRoutes.js";
import Admin from "./AdminRoutes.js"

const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/Service", Service);
router.use("/Admin",Admin)

export default router;
