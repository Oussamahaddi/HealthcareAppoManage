import express from "express";
import Succurcal from "./SuccurcalRoutes.js";
import Service from "./ServiceRoutes.js";
import Client from "./ClientRoutes.js"

const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/Service", Service);
router.use("/client", Client);

export default router;
