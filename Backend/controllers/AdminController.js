import expressAsyncHandler from "express-async-handler";
import AdminModel from "../models/AdminModel";
import Joi from "joi"

/**
 * @desc Get all admins
 * @route GET /admin
 * @access private
 */
const getAllAdmin = expressAsyncHandler(async (req, res) => {
    const Admins = await AdminModel.findAll();
    res.status(200).json(Admins);

})

const finAdmin = expressAsyncHandler(async (req, res) => {

})

const addAdmin = expressAsyncHandler(async (req, res) => {
    const { first_name, last_name, password, profile_image } = req.body;
    const adminSchema = Joi.object({
        first_name: Joi.string().max(20).required(),
        last_name: Joi.string().max(20).required(),
        password: Joi.string().min(10).required(),
        profile_image: Joi.string().required()
    });
    const AdminData = {
        first_name,
        last_name,
        password,
        profile_image
    }
    const validationResult = adminSchema.validate(AdminData, { abortEarly: false });

    if (validationResult.error) {
        const errorDetails = validationResult.error.details;
        return res.status(400).json({ errors: errorDetails });
    } else {
        res.json(validationResult.value);
    }
    
})

const deleteAdmin = expressAsyncHandler(async (req, res) => {

    res.json({ status: 'admin is deleted' })
})

const updateAdmin = expressAsyncHandler(async (req, res) => {
    res.json({ status: 'admin is updated' })
})

export { getAllAdmin, finAdmin, addAdmin, deleteAdmin, updateAdmin }