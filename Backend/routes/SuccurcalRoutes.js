import { Router } from "express";

import { getAllSuccurcal } from "../controllers/SuccurcalController.js";

const router = Router();

/**
 * @get
 * @desc // get all articals
 * @access public
 */
router.get("/", getAllSuccurcal);

export default router;
