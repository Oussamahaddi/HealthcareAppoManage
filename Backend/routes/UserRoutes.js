import { Router } from "express";

import {
    authUser,
    registerUser,
    getAllUseres
} from "../controllers/userController.js";

const router = Router();

/**
 * @GET
 * @desc // get all Succurcals
 * @access public
 */
router.get("/", getAllUseres);

/**
 * @GET
 * @desc // get one Succurcal
 * @access public
 */
router.get("/:id");

/**
 * @POST
 * @desc // create a new user
 * @access public
 */
router.post("/register", registerUser);

/**
 * @PATCH
 * @desc // update a Succurcal
 * @access private
 */
router.patch("/:id");

/**
 * @DELETE
 * @desc // Delete a Succurcal
 * @access private
 */
router.delete("/:id");

export default router;
