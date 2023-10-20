import sequelize from "../config/sequelize.js";
import SuccurcalModel from "../models/SuccurcalModel.js";
import ServiceModel from "../models/ServiceModel.js";
import SuccurcalServicePivot from "../models/SuccurcalServicePivot.js";
import asynchandler from "express-async-handler";
import { SuccurcalSchema, validator } from "../validators/JoiSchemas.js";

/**
 * @desc Get all Succurcal
 * @route GET /Succurcal
 * @access public
 */

/**
 * Get all Succurcal
 * @route GET /Succurcal
 * @access public
 */
const getAllSuccurcal = asynchandler(async (req, res) => {
    const Succurcals = await SuccurcalModel.findAll({
        include: ServiceModel
    });
    res.status(200).json(Succurcals);
});

/**
 * @desc Get one Succurcal
 * @route GET /Succurcal
 * @access public
 */

const getOneSuccurcal = asynchandler(async (req, res) => {
    const { id } = req.params;
    const Succurcals = await SuccurcalModel.findByPk(id, {
        include: ServiceModel
    });
    res.status(200).json(Succurcals);
});

/**
 * @desc create new Succurcal
 * @route POST /Succurcal
 * @access private
 */

const CreateSuccurcal = asynchandler(async (req, res) => {
    validator(SuccurcalSchema, req.body);

    const { title, description, services } = req.body;

    const transaction = await sequelize.transaction();
    try {
        const Succurcal = await SuccurcalModel.create({
            title: title.customTrim(),
            description: description.customTrim()
        });

        await Succurcal.setServices(services, { transaction });

        await transaction.commit();

        res.status(201).json({
            Succurcal,
            message: "Succurcal created succusfully"
        });
    } catch {
        await transaction.rollback();
        throw new Error("Error occurred while creating Succurcal");
    }
});

/**
 * @desc Update Succurcal
 * @route PATCH /Succurcal/:id
 * @access private
 */

const UpdateSuccurcal = asynchandler(async (req, res) => {
    validator(SuccurcalSchema, req.body);

    const { id } = req.params;
    const { title, description, services } = req.body;

    // Get the Succurcal
    const Succurcal = await SuccurcalModel.findByPk(id);

    if (!Succurcal) {
        throw new Error("Succurcal not found");
    }

    Succurcal.title = title.customTrim();
    Succurcal.description = description.customTrim();

    await Succurcal.setServices(services);

    res.status(200).json({
        Succurcal,
        message: "Succurcal updated succesfully."
    });
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
        throw new Error("Succurcal not found");
    }

    // If it exists, delete it
    await existingSuccurcal.destroy();

    res.status(200).json({ message: "Succurcal deleted successfully" });
});

/**
 * @desc assign services to Succurcal
 * @route post /Succurcal/:id
 * @access private
 */


export {
    getAllSuccurcal,
    getOneSuccurcal,
    CreateSuccurcal,
    UpdateSuccurcal,
    DeleteSuccurcal,
    assignservicesToSuccurcal
};
