import asynchandler from "express-async-handler";
import {
    UserSchema,
    TechnicienSchema,
    UserUpdateSchema,
    validator
} from "../validators/JoiSchemas.js";
import { TechnicienModel } from "../models/TechnicienModel.js";
import { UserModel } from "../models/UserModel.js";
import sequelize from "../config/sequelize.js";
import ROLE_LIST from "../config/Role_list.js";

/**
 * @desc Get all Techniciens
 * @route GET /techniciens
 * @access private
 */
const getAllTechniciens = asynchandler(async (req, res) => {
    const technicien = await UserModel.findAll({where: {role : ROLE_LIST.technicin}}, { include: TechnicienModel });
    if (!technicien) {
        throw new Error("Technicien not found");
    }
    res.status(200).json(technicien);
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
        throw new Error("Technicien not found");
    }
    res.status(200).json(technicien);
});

/**
 * @desc Create a new Technicien
 * @route POST /techniciens
 * @access private
 */
const createTechnicien = asynchandler(async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        profile_image,
        password,
        dispo,
        grade
    } = req.body;

    const user = {
        first_name,
        last_name,
        email,
        profile_image,
        password
    };

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
    const { id } = req.params;
    const technicien = await UserModel.findByPk(id, {
        include: TechnicienModel
    });
    if (!technicien && technicien.role != "technicien") {
        throw new Error("Technicien not found");
    }
    console.log(technicien.Technicien.grade);
    const {
        grade = technicien.Technicien.grade,
        dispo = technicien.Technicien.dispo,
        first_name = technicien.first_name,
        last_name = technicien.last_name,
        email = technicien.email,
        profile_image = technicien.profile_image
    } = req.body;
    const tech = {
        dispo,
        grade
    };
    const user = {
        first_name,
        last_name,
        email,
        profile_image
    };
    validator(TechnicienSchema, tech);
    validator(UserUpdateSchema, user);


    technicien.Technicien.grade = grade;
    technicien.Technicien.dispo = dispo;
    technicien.first_name = first_name;
    technicien.last_name = last_name;
    technicien.profile_image = profile_image;
    technicien.email = email;

    await technicien.save();
    await technicien.Technicien.save();

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
        throw new Error("Technicien not found");
    }
    const technicien = await TechnicienModel.findByPk(user.actor_id);
    if (!technicien) {
        throw new Error("Technicien not found");
    }

    async function deleteRecords() {
        const t = await sequelize.transaction();

        try {
            const technicienDestroyResult = await technicien.destroy({
                transaction: t
            });
            const userDestroyResult = await user.destroy({ transaction: t });

            await t.commit();
            console.log("Transaction committed successfully");

            if (technicienDestroyResult < 1 || userDestroyResult < 1) {
                throw new Error("Failed to delete technicien or user");
            }
        } catch (error) {
            await t.rollback();
            console.error("Transaction rolled back due to an error:", error);
            throw error;
        }
    }

    await deleteRecords();

    return res.status(204).send();
});

export {
    createTechnicien,
    getAllTechniciens,
    getOneTechnicienById,
    updateTechnicien,
    deleteTechnicien
};
