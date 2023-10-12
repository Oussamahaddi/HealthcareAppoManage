import { Router } from "express";

import {getAllAdmin,finAdmin,addAdmin,deleteAdmin,updateAdmin} from "../controllers/AdminController.js";

const router = Router();

/**
 * @get
 * @desc // get all articals
 * @access public
 */


router.get('/',getAllAdmin)
router.get('/find/id',finAdmin)
router.post('/add',addAdmin)
router.post('/delete/id',deleteAdmin)
router.post('/update/id',updateAdmin)


export default router;