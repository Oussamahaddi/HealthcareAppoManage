import UserModel from "../models/UserModel.js";
import asynchandler from "express-async-handler";
import { UserSchema, validator } from "../validators/JoiSchemas.js";

/**
 * @desc loign
 * @route post /user
 * @access public
 */

const authUser = asynchandler(async (req, res) => {});

/**
 * @desc register a new user
 * @route post /user
 * @access public
 */
const registerUser = asynchandler(async (req, res) => {
    // chceck if inputes are valid
    validator(UserSchema, req.body);

    const { first_name, last_name, email, password, profile_image } = req.body;

    const newUser = await UserModel.create({
        first_name: first_name.customTrim(),
        last_name: last_name.customTrim(),
        email: email,
        password: password,
        profile_image: profile_image
    });

    res.status(201).json(newUser);
});

const getAllUseres = asynchandler(async (req, res) => {
    const users = UserModel.findAll();
    res.status(200).json(users);
});

export { authUser, registerUser, getAllUseres };
