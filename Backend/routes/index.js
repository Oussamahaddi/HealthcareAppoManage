import express from "express";
import Succurcal from "./SuccurcalRoutes.js";
import Service from "./ServiceRoutes.js";
import ExigenceService from "./ExigenceServiceRoutes.js";
import Client from "./ClientRoutes.js";
import User from "./UserRoutes.js";
import Admin from "./AdminRoutes.js";
import Technicien from "./TechnicienRoutes.js";
import ROLE_LIST from "../config/Role_list.js";
import { verifyRole } from "../middleware/verifyRole.js";


const router = express.Router();

router.use("/succurcal", Succurcal);
router.use("/client", Client);
router.use("/service", Service);
router.use("/ExigenceService", ExigenceService);
router.use("/user",verifyRole(ROLE_LIST.admin), User);
router.use("/admin", Admin);
router.use("/technicien", Technicien);

export default router;
