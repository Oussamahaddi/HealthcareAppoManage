import asynchandler from "express-async-handler";
import {
    UserSchema,
    ChefSchema,
    validator
} from "../validators/JoiSchemas.js";
import { ChefModel } from "../models/ChefModel.js";
import { UserModel } from "../models/UserModel.js";




/**
 * @desc Get all Chefs
 * @route GET /Chefs
 * @access private
 */
const getAllChefs = asynchandler(async (req, res) => {
    const Chefs = await UserModel.findAll({ include: ChefModel });
    res.status(200).json(Chefs);
});



/**
 * @desc Get a Chef by ID
 * @route GET /Chefs/:id
 * @access private
 */
const getOneChefById = asynchandler(async (req, res) => {
    const Chef = await UserModel.findByPk(req.params.id, {
        include: ChefModel
    });
    if (!Chef) {
        return res.status(404).json({ message: "Chef not found" });
    }
    res.status(200).json(Chef);
});




/**
 * @desc Create a new Chef
 * @route POST /Chefs
 * @access private
 */
const createChef = asynchandler(async (req, res) => {
    const { first_name, last_name, email, profile_image, password } = req.body;

    const user = {
        first_name,
        last_name,
        email,
        profile_image,
        password
    };

    const { grade } = req.body;

    const chef = {
        grade
    };

    validator(UserSchema, user);
    validator(ChefSchema, chef);
    const Chef = await ChefModel.create(
        {
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
            include: [ChefModel.user]
        }
    );

    return res.status(201).json(Chef);
});






/**
 * @desc Update a Chef by ID
 * @route PUT /Chefs/:id
 * @access private
 */
const updateChef = asynchandler(async (req, res) => {
    validator(ChefSchema, req.body);
    const { grade } = req.body;
    const { id } = req.params;
    const Chef = await ChefModel.findByPk(id);

    if (!Chef) {
        return res.status(404).json({ message: "Chef not found" });
    }
    Chef.grade = grade;

    await Chef.save();

    return res.status(200).json(Chef);
});

/**
 * @desc Delete a Chef by ID
 * @route DELETE /Chef/:id
 * @access private
 */
const deleteChef = asynchandler(async (req, res) => {
    const user = await UserModel.findByPk(req.params.id);

    if (!user) {
        return res.status(404).json({ message: "Chef not found" });
    }
    const Chef = await ChefModel.findByPk(user.actor_id);
    const [ChefDestroyResult, userDestroyResult] = await Promise.all([
        Chef.destroy().catch((error) => {
            throw error;
        }), // Handle Chef destroy error
        user.destroy().catch((error) => {
            throw error;
        }) // Handle user destroy error
    ]);

    if (ChefDestroyResult === null || userDestroyResult === null) {
        return res
            .status(500)
            .json({ message: "Failed to delete Chef or user" });
    }

    return res.status(204).send();
});

export {
    createChef,
    getAllChefs,
    getOneChefById,
    updateChef,
    deleteChef
};
