import asynchandler from "express-async-handler";
import { ClientEntrModel, UserModel } from "../models/index.js";
import { validator, UserSchema, EntrepriseSchema } from "../validators/JoiSchemas.js";
import { generateJwt } from "../utils/generateToken.js";

/**
 * @desc Get all entreprise
 * @route GET /entreprise
 * @access public
 */

const allCompany = asynchandler(async (req, res) => {
    const clientEntrprise = await UserModel.findAll({
        where: { role: "entreprise" },
        include: [ClientEntrModel]
    });
    if (!clientEntrprise) throw new Error("No company Found");
    res.status(200).json(clientEntrprise);
});

/**
 * @desc Get all entreprise
 * @route GET /entreprise
 * @access public
 */

const createCompany = asynchandler(async (req, res) => {
    const {
        first_name,
        last_name,
        email,
        password,
        profile_image,
        companyName,
        role
    } = req.body;

    const entreprise = {
        companyName
    }
    const user = {
        first_name,
        last_name,
        email,
        profile_image,
        password,
        role
    };

    validator(UserSchema, user);
    validator(EntrepriseSchema, entreprise);


    const newUser = await ClientEntrModel.create(
        {
            companyName : companyName,
            user : {
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                profile_image: profile_image,
            }
            
        },
        {
            include: [ClientEntrModel.user]
        }
    );

    if (!newUser) throw new Error("Can't create user for some reason");
    newUser.token = generateJwt(res, newUser.id, newUser.user.role);
    res.status(201).json({ token: newUser.token });
});

/**
 * @desc ....
 * @route ....
 * @access public
 */

export { allCompany, createCompany };
