import { Router } from "express";


import {
    getAllSuccurcal,
    getOneSuccurcal,
    CreateSuccurcal,
    UpdateSuccurcals,
    DeleteSuccurcal
} from "../providers/SuccurcalProvider.js";

const router = Router();

/**
 * @GET
 * @desc // get one Succurcal
 * @access public
 */
router.get("/:id", getOneSuccurcal);

/**
 * @POST
 * @desc // create a new Succurcal
 * @access private
 */
router.post("/", CreateSuccurcal);

/**
 * @PATCH
 * @desc // update a Succurcal
 * @access private
 */
router.patch("/:id", UpdateSuccurcals);

/**
 * @DELETE
 * @desc // Delete a Succurcal
 * @access private
 */
router.delete("/:id", DeleteSuccurcal);

export default router;
