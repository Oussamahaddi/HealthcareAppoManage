import { Router } from "express";

import { getAllEmployes, getOneEmploye ,createEmploye} from "../controllers/EmployeController.js";

const router = Router();


/**
 * @GET
 * @desc // get all employes
 * @access private
 */

router.get('/', getAllEmployes)

/**
 * @GET
 * @desc // get one employe
 * @access private
 */

router.get('/:id', getOneEmploye)


/**
 * @POST
 * @desc // create employe
 * @access private
 */

router.post('/', createEmploye)

export default router;