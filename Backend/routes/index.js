import express  from "express"
import Succurcal from "./SuccurcalRoutes.js"

const router = express.Router();

router.use("/succurcal", Succurcal);

export default router;