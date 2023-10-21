import express from "express";
import {
    createTechnicien,
    getAllTechniciens,
    getOneTechnicienById,
    updateTechnicien,
    deleteTechnicien
} from "../providers/TechnicienProvider.js";

const router = express.Router();

/**
 * @desc Get all Techniciens
 * @route GET /techniciens
 * @access private
 */
router.get("/", getAllTechniciens);

/**
 * @desc Get a Technicien by ID
 * @route GET /techniciens/:id
 * @access public
 */
router.get("/:id", getOneTechnicienById);

/**
 * @desc Create a new Technicien
 * @route POST /techniciens
 * @access private
 */
router.post("/create", createTechnicien);

/**
 * @desc Update a Technicien by ID
 * @route PUT /techniciens/:id
 * @access private
 */
router.put("/update/:id", updateTechnicien);

/**
 * @desc Delete a Technicien by ID
 * @route DELETE /techniciens/:id
 * @access private
 */
router.delete("/delete/:id", deleteTechnicien);

export default router;
