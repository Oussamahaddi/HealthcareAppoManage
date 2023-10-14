import express from "express";
import Succurcal from "./SuccurcalRoutes.js";
import Service from "./ServiceRoutes.js";

const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/Service", Service);

export default router;
