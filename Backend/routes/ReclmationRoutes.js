import Router from "express";
import {getAllReclamation, createReclamation} from "../controllers/ReclamationController.js";
import { verifyRole } from "../middleware/verifyRole.js";
import ROLE_LIST from "../config/Role_list.js";

const router = Router();

/**
 * @GET
 * @desc // get all reclamation
 * @access private
 */

router.get("/", verifyRole(ROLE_LIST.chef, ROLE_LIST.admin, ROLE_LIST.superadmin), getAllReclamation);

/**
 * @POST
 * @desc // Create reclamation
 * @access private
 */

router.post("/", verifyRole(ROLE_LIST.chef, ROLE_LIST.client), createReclamation);

export default router;