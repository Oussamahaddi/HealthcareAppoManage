import asynchandler from "express-async-handler";
import ROLE_LIST from "../config/Role_list.js";
import { UserSchema, validator } from "../validators/JoiSchemas.js";
import {ClientModel, UserModel} from "../models/index.js"

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
    // check if inputes are valid
    validator(UserSchema, req.body);

    let { first_name, last_name, email, password, profile_image, role } = req.body;

    if (role != ROLE_LIST.client) {
        role = ROLE_LIST.entreprise;
    }

    // const client = await ClientModel.create()

    const newUser = await ClientModel.create({
        user : {
            first_name: first_name.customTrim(),
            last_name: last_name.customTrim(),
            email: email,
            password: password,
            profile_image: profile_image,
            role : role
        }
    }, {
        include : [ClientModel.user]
    });

    res.status(201).json(newUser);
});

const getAllUseres = asynchandler(async (req, res) => {
    const users = UserModel.findAll();
    res.status(200).json(users);
});

export { authUser, registerUser, getAllUseres };
