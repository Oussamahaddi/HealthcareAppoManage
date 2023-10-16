import expressAsyncHandler from "express-async-handler";
import { AdminSchema, validator } from "../validators/JoiSchemas.js";
import {UserModel, AdminModel} from "../models/index.js";
import ROLE_LIST from "../config/Role_list.js";
import { generateJwt } from "../utils/generateToken.js";


/**
 * @desc Get all admins
 * @route GET /Admin
 * @access private
 */

const getAllAdmin = expressAsyncHandler(async (req, res) => {
    const Admins = await AdminModel.findAll();

    res.status(200).json(Admins);
    
    res.json({ status: true })
})

/**
 * @desc Get one admin
 * @route GET /Admin/:id
 * @access private
 */

const getOneAdmin = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const Admins = await AdminModel.findByPk(id);

    res.status(200).json(Admins);
})

/**
 * @desc create admin
 * @route POST /Admin
 * @access private
 */

const CreateAdmin = expressAsyncHandler(async (req, res) => {
    let { first_name, last_name, email, password, profile_image, role } = req.body;

    const newUser = await AdminModel.create({
        user : {
            first_name: first_name.customTrim(),
            last_name: last_name.customTrim(),
            email: email,
            password: password,
            profile_image: profile_image
        }
    }, {
        include : [AdminModel.user]
    });

    newUser.token = generateJwt(res, newUser.id);

    res.status(201).json(newUser.token);
})

/**
 * @desc Update Admin
 * @route PUTCH /Admin/update/:id
 * @access private
 */

const UpdateAdmin = expressAsyncHandler(async (req, res) => {
    const error = await validator(AdminSchema, req.body);

    if (error) {
        return res.status(400).json({ error: error });
    }

    const { id } = req.params;
    const { first_name, last_name, email, password, profile_image } = req.body;
    const Admin = await UserModel.findByPk(id);

    if (!Admin) {
        return res.status(404).json({ error: "Service not found" });
    }

    Admin.first_name = first_name;
    Admin.last_name = last_name;
    Admin.email = email;
    Admin.password = password;
    Admin.profile_image = profile_image;

    await Admin.save();

    res.status(201).json(Admin);
})


/**
 * @desc Delete admin
 * @route DELETE /Admin/delete/:id
 * @access private
 */

const DeleteAdmin = expressAsyncHandler(async (req, res) => {
    const { id } = req.params;

    const existingAdmin = await UserModel.findByPk(id);

    if (!existingAdmin) {
        return res.status(404).json({ error: "Admin not found" });
    }

    await existingAdmin.destroy();

    res.status(200).json({ message: "Admin deleted successfully" })
})

export { getAllAdmin, getOneAdmin, CreateAdmin, UpdateAdmin, DeleteAdmin }