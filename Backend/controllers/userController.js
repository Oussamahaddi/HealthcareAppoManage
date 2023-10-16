import asynchandler from "express-async-handler";
import ROLE_LIST from "../config/Role_list.js";
import { UserSchema, validator, LoginSchema } from "../validators/JoiSchemas.js";
import {ClientModel, UserModel} from "../models/index.js"
import { generateJwt } from "../utils/generateToken.js";
import bcrypt from "bcrypt";


/**
 * @desc register a new user
 * @route post /user
 * @access public
 */
const createUser = asynchandler(async (req, res) => {
    // check if inputes are valid
    validator(UserSchema, req.body);

    let { first_name, last_name, email, password, profile_image } = req.body;

    const newUser = await ClientModel.create({
        user : {
            first_name: first_name.customTrim(),
            last_name: last_name.customTrim(),
            email: email,
            password: password,
            profile_image: profile_image,
        }
    }, {
        include : [ClientModel.user]
    });
    
    if (newUser) {
        newUser.token = generateJwt(res, newUser.id);
        res.status(201).json({token : newUser.token});
    } else {
        throw new Error("Can't create user for some reason");
    }

});

/**
 * @desc loign the user
 * @route post /user
 * @access public
 */

const authUser = asynchandler(async (req, res) => {
    validator(LoginSchema, req.body);
    const {email, password} = req.body;
    const user = await UserModel.findOne({where : {email : email}});
    const comparePwd = await bcrypt.compare(password, user.password);
    if (user && comparePwd) {
        user.token = generateJwt(res, user.id);
        res.status(201).json({token : user.token});
    } else {
        res.status(401);
        throw new Error("Invalid email or password ");
    }
});

/**
 * @desc logout the user
 * @route post /user
 * @access public
 */

const logoutUser = asynchandler(async (req, res) => {
    res.status(200).json({message : "Logged out"});
});

/**
 * @desc get all users
 * @route get /user
 * @access public
 */

const getAllUseres = asynchandler(async (req, res) => {
    const users = await UserModel.findAll({include: ClientModel});
    res.status(200).json(req.user);
});

export { authUser, createUser, getAllUseres, logoutUser };
