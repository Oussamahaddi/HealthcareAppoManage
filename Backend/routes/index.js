import express from "express";
import Succurcal from "./SuccurcalRoutes.js";
import Service from "./ServiceRoutes.js";
import ExigenceService from "./ExigenceServiceRoutes.js";
import User from "./UserRoutes.js";

const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/service", Service);
router.use("/ExigenceService", ExigenceService);
router.use("/user", User);

export default router;
