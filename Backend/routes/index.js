import express  from "express"
import Succurcal from "./SuccurcalRoutes.js"
import Admin from './AdminRoutes.js'

const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/admin",Admin);

export default router;