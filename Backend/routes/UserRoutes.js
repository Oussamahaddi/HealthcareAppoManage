import { Router } from "express";
import { auth } from "../middleware/AuthMiddleware.js";
import {
    authUser,
    createUser,
    getAllUseres,
    logoutUser
} from "../controllers/userController.js";

const router = Router();

/**
 * @GET
 * @desc // get all Succurcals
 * @access public
 */
router.get("/", auth, getAllUseres);

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
router.post("/register", createUser);

/**
 * @POST
 * @desc // login user
 * @access public
 */
router.post("/auth", authUser);

/**
 * @POST
 * @desc // logout user
 * @access public
 */
router.post("/logout", auth, logoutUser);

/**
 * @PATCH
 * @desc // update a Succurcal
 * @access private
 */
router.patch("/update/:id", auth);

/**
 * @DELETE
 * @desc // Delete a Succurcal
 * @access private
 */
router.delete("/delete/:id");

export default router;
