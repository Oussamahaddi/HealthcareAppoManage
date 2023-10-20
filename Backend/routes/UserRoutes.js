import { Router } from "express";

import {
    authUser,
    registerUser,
    getAllUsers,
    getOneUser
} from "../controllers/userController.js";

const router = Router();

/**
 * @GET
 * @desc // get all Users
 * @access public
 */
router.get("/", getAllUsers);

/**
 * @GET
 * @desc // get one User
 * @access public
 */
router.get("/:id", getOneUser);

/**
 * @POST
 * @desc // create a new user
 * @access public
 */
router.post("/", registerUser);

/**
 * @PATCH
 * @desc // update a User
 */
router.patch("/:id");

/**
 * @DELETE
 * @desc // Delete a User
 * @access private
 */
router.delete("/:id");

export default router;
