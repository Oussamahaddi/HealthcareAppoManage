import asynchandler from "express-async-handler";
import { ReclamationSchema, validator } from "../validators/JoiSchemas.js";
import { ChefModel, ReclamationModel, TechnicienModel, UserModel } from "../models/index.js";


/**
 * @desc Get all Reclamation
 * @route GET /Admin
 * @access private
 */

const getAllReclamation = asynchandler(async (req, res) => {
    const reclamations = await ReclamationModel.findAll();
    if (!reclamations) throw new Error("No reclamation found");
    res.status(201).json(reclamations);
})

/**
 * @desc Get all Reservation
 * @route GET /Admin
 * @access private
 */

const createReclamation = asynchandler(async (req, res) => {
    validator(ReclamationSchema, req.body);

    const {description, level, TechnicienId } = req.body;

    const reclamation = await ReclamationModel.create({
        description : description,
        level : level,
        userId : req.user.actorId,
        TechnicienId : TechnicienId
    });

    if (!reclamation) throw new Error ("Something wrong while reservation");
    res.status(201).json(reclamation);
})


export {getAllReclamation, createReclamation}