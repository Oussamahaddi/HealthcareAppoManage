import { Router } from "express";

import { getAllAdmin, getOneAdmin, CreateAdmin, UpdateAdmin, DeleteAdmin } from "../providers/AdminProvider.js";

const router = Router();

/**
 * @GET
 * @desc // get all admins
 * @access private
 */

router.get('/', getAllAdmin)

/**
 * @GET
 * @desc // get one admin
 * @access private
 */

router.get('/:id', getOneAdmin)

/**
 * @POST
 * @desc // create admin
 * @access private
 */

router.post('/', CreateAdmin)

/**
 * @PUTCH
 * @desc // update Admin
 * @access private
 */

router.post('/update/:id', UpdateAdmin)

/**
 * @DELETE
 * @desc // delete admin
 * @access private
 */

router.post('/delete/:id', DeleteAdmin)

export default router;