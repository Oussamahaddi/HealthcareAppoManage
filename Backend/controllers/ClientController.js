import asynchandler from "express-async-handler";
import {ClientModel, UserModel} from "../models/index.js";
import { validator, UserSchema } from "../validators/JoiSchemas.js";
import { generateJwt } from "../utils/generateToken.js";
import ROLE_LIST from "../config/Role_list.js";


/**
 * @desc Get all client
 * @route GET /client
 * @access public
 */

const allClient = asynchandler( async(req, res) => {
    const client = await UserModel.scope('withoutPassword').findAll({where: {role : ROLE_LIST.client}, include : [ClientModel]});
    if (!client) throw new Error("No client Found");
    res.status(200).json(client);
})

/**
 * @desc Create a client
 * @route POST /client
 * @access public
 */

const createClient = asynchandler(async (req, res) => {
    // check if inputes are valid
    validator(UserSchema, req.body);

    let { first_name, last_name, email, password, profile_image } = req.body;

    if (!first_name.customTrim() || !last_name.customTrim() || !email.customTrim() || !password.customTrim()) 
        throw new Error("The fields should not be empty")

    const newUser = await UserModel.create({
        first_name: first_name.customTrim(),
        last_name: last_name.customTrim(),
        email: email.customTrim(),
        password: password,
        profile_image: profile_image,
        client : {}
    }, {    
        include : [UserModel.client]
    });
    
    if (!newUser) throw new Error("Can't create user for some reason");
    newUser.token = generateJwt(res, newUser.id, newUser.role);
    res.status(201).json({token : newUser.token});
});

/**
 * @desc ....
 * @route ....
 * @access public
 */


export {allClient, createClient};