import Express  from "express";
import { Router } from "express";

import {
  createChef,
  readChefs,
  updateChef,
  DeleteChef
} from "../providers/ChefProvider.js";

const router = Router();


/**
 * @POST
 * @desc // create new chef
 * @access private
 */
router.post('/create',createChef);


/**
 * @GET
 * @desc // get chefs
 * @access private
 */
router.get('/get',readChefs);


/**
 * @PUT
 * @desc // update chef by id
 * @access private
 */
router.patch('/put/:id',updateChef);


/**
 * @DELETE
 * @desc // delete chef by id
 * @access private
 */
router.delete('/delete/:id',DeleteChef);



// router.post('/chef/reclamation', createReclamation);
// router.get('/chef/client',readClient);



export default router;