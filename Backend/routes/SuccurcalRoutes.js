import { Router } from "express";

import { 
    getAllSuccurcal, 
    saveSuccurcal, 
    updateSuccurcal, 
    deleteSuccurcal 
} from "../controllers/SuccurcalController.js";

const router = Router();

/**
 * @get
 * @desc // get all articals
 * @access public
 */

router.get("/", getAllSuccurcal);
router.post("/create", saveSuccurcal);
router.post("/update/:id", updateSuccurcal);
router.get("/delete/:id", deleteSuccurcal);

export default router;
