import SuccurcalModel from "../models/SuccurcalModel.js";
import asynchandler from "express-async-handler";
import { SuccurcalSchema, validator } from "../validators/JoiSchemas.js";

/**
 * @desc Get all Succurcal
 * @route GET /Succurcal
 * @access public
 */

const getAllSuccurcal = asynchandler(async (req, res) => {
    const Succurcals = await SuccurcalModel.findAll();
    res.status(200).json(Succurcals);
});

/**
 * @desc Get one Succurcal
 * @route GET /Succurcal
 * @access public
 */

const getOneSuccurcal = asynchandler(async (req, res) => {
    const { id } = req.params;
    const Succurcals = await SuccurcalModel.findByPk(id);
    res.status(200).json(Succurcals);
});

/**
 * @desc create new Succurcal
 * @route POST /Succurcal
 * @access private
 */

const CreateSuccurcal = asynchandler(async (req, res) => {
    validator(SuccurcalSchema, req.body);

    const { title, description } = req.body;
    // create a new SuccurcalModel
    const Succurcals = await SuccurcalModel.create({
        title: title.customTrim(),
        description: description.customTrim()
    });
    res.status(201).json(Succurcals);
});

/**
 * @desc Update Succurcal
 * @route PATCH /Succurcal
 * @access private
 */

const UpdateSuccurcal = asynchandler(async (req, res) => {
    validator(SuccurcalSchema, req.body);

    const { id } = req.params;
    const { title, description } = req.body;

    // get Succurcals
    const Succurcals = await SuccurcalModel.findByPk(id);

    if (!Succurcals) {
        if (!Succurcals) {
            return res.status(404).json({ error: "Succurcal not found" });
        }
    }

    //update Succurcals
    Succurcals.title = title;
    Succurcals.description = description;

    // save Succurcals
    await Succurcals.save();

    res.status(201).json(Succurcals);
});

/**
 * @desc Delete one Succurcal
 * @route DELETE /Succurcal
 * @access private
 */

const DeleteSuccurcal = asynchandler(async (req, res) => {
    const { id } = req.params;

    // Check if the Succurcal exists
    const existingSuccurcal = await SuccurcalModel.findByPk(id);
    // check if Succurcals existes
    if (!existingSuccurcal) {
        return res.status(404).json({ error: "Succurcal not found" });
    }

    // If it exists, delete it
    await existingSuccurcal.destroy();

    res.status(200).json({ message: "Succurcal deleted successfully" });
});

export {
    getAllSuccurcal,
    getOneSuccurcal,
    CreateSuccurcal,
    UpdateSuccurcal,
    DeleteSuccurcal
};