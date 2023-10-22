import {ExigenceServiceModel} from "../models/ExigenceServiceModel.js";
import {ServiceModel} from "../models/ServiceModel.js";
import asynchandler from "express-async-handler";
import { ExigenceServiceSchema, validator } from "../validators/JoiSchemas.js";

/**
 * @desc Get all ExigenceServices
 * @route GET /ExigenceService
 * @access public
 */

const getAllExigenceService = asynchandler(async (req, res) => {
    const ExigenceService = await ExigenceServiceModel.findAll({
        include: ServiceModel
    });
    if (!ExigenceService) throw new Error("No Exigence found");
    res.status(200).json(ExigenceService);
});

/**
 * @desc Get one ExigenceService
 * @route GET /ExigenceService
 * @access public
 */

const getOneExigenceService = asynchandler(async (req, res) => {
    const { id } = req.params;
    const ExigenceService = await ExigenceServiceModel.findByPk(id, {
        include: ServiceModel
    });
    if (!ExigenceService) throw new Error("No ExigenceService found");
    res.status(200).json(ExigenceService);
});

/**
 * @desc create new ExigenceService
 * @route POST /ExigenceService
 * @access private
 */

const CreateExigenceService = asynchandler(async (req, res) => {
    validator(ExigenceServiceSchema, req.body);

    const { typeInput, title, required, serviceId } = req.body;

    if (!title.customTrim() || !typeInput.customTrim()) 
        throw new Error("The fields should not be empty")

    // create a new ExigenceService
    const ExigenceService = await ExigenceServiceModel.create({
        typeInput: typeInput,
        title: title,
        required: required,
        ServiceId: serviceId
    });
    if (!ExigenceService) throw new Error("Something wrong while creation of Exigence");
    res.status(201).json(ExigenceService);
});

export { getAllExigenceService, getOneExigenceService, CreateExigenceService };
