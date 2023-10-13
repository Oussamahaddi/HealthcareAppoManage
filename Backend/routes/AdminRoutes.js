import { Router } from "express";

import {getAllAdmin,finAdmin,addAdmin,deleteAdmin,updateAdmin} from "../controllers/AdminController.js";

const router = Router();

/**
 * @GET
 * @desc // get all articals
 * @access public
 */


router.get('/',getAllAdmin)
router.get('/find/:id',finAdmin)
router.post('/create',addAdmin)
router.post('/update/:id',updateAdmin)
router.post('/delete/:id',deleteAdmin)


export default router;