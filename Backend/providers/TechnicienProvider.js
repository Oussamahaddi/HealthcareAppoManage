import asynchandler from "express-async-handler";
import {
    UserSchema,
    TechnicienSchema,
    validator
} from "../validators/JoiSchemas.js";
import { TechnicienModel } from "../models/TechnicienModel.js";
import { UserModel } from "../models/UserModel.js";

/**
 * @desc Get all Techniciens
 * @route GET /techniciens
 * @access private
 */
const getAllTechniciens = asynchandler(async (req, res) => {
    const techniciens = await UserModel.findAll({ include: TechnicienModel });
    res.status(200).json(techniciens);
});

/**
 * @desc Get a Technicien by ID
 * @route GET /techniciens/:id
 * @access private
 */
const getOneTechnicienById = asynchandler(async (req, res) => {
    const technicien = await UserModel.findByPk(req.params.id, {
        include: TechnicienModel
    });
    if (!technicien) {
        return res.status(404).json({ message: "Technicien not found" });
    }
    res.status(200).json(technicien);
});

/**
 * @desc Create a new Technicien
 * @route POST /techniciens
 * @access private
 */
const createTechnicien = asynchandler(async (req, res) => {
    const { first_name, last_name, email, profile_image, password } = req.body;

    const user = {
        first_name,
        last_name,
        email,
        profile_image,
        password
    };

    const { dispo, grade } = req.body;

    const tech = {
        dispo,
        grade
    };

    validator(UserSchema, user);
    validator(TechnicienSchema, tech);
    const technicien = await TechnicienModel.create(
        {
            dispo,
            grade,
            user: {
                first_name: first_name.customTrim(),
                last_name: last_name.customTrim(),
                email: email,
                password: password,
                profile_image: profile_image
            }
        },
        {
            include: [TechnicienModel.user]
        }
    );

    return res.status(201).json(technicien);
});

/**
 * @desc Update a Technicien by ID
 * @route PUT /techniciens/:id
 * @access private
 */
const updateTechnicien = asynchandler(async (req, res) => {
    validator(TechnicienSchema, req.body);
    const { grade, dispo } = req.body;
    const { id } = req.params;
    const technicien = await TechnicienModel.findByPk(id);

    if (!technicien) {
        return res.status(404).json({ message: "Technicien not found" });
    }

    technicien.grade = grade;
    technicien.dispo = dispo;

    await technicien.save();

    return res.status(200).json(technicien);
});
/**
 * @desc Delete a Technicien by ID
 * @route DELETE /techniciens/:id
 * @access private
 */
const deleteTechnicien = asynchandler(async (req, res) => {
    const user = await UserModel.findByPk(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "Technicien not found" });
    }
    const technicien = await TechnicienModel.findByPk(user.actor_id);
    const [technicienDestroyResult, userDestroyResult] = await Promise.all([
        technicien.destroy().catch((error) => {
            throw error;
        }), // Handle technicien destroy error
        user.destroy().catch((error) => {
            throw error;
        }) // Handle user destroy error
    ]);

    if (technicienDestroyResult === null || userDestroyResult === null) {
        return res
            .status(500)
            .json({ message: "Failed to delete technicien or user" });
    }

    return res.status(204).send();
});

export {
    createTechnicien,
    getAllTechniciens,
    getOneTechnicienById,
    updateTechnicien,
    deleteTechnicien
};
