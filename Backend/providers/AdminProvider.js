import AdminModel from "../models/AdminModel.js";
import expressAsyncHandler from "express-async-handler";
import {AdminSchema,validateschema} from "../validators/JoiSchemas.js";

/**
 * @desc Get all admins
 * @route GET /Admin
 * @access private
 */
const getAllAdmin = expressAsyncHandler(async (req, res) => {
    const Admins = await AdminModel.findAll();
    res.status(200).json(Admins);
    res.json({status:true})
})

const getOneAdmin = expressAsyncHandler(async (req, res) => {
})

const create = expressAsyncHandler(async (req, res) => {

})

const deleteAdmin = expressAsyncHandler(async (req, res) => {
    res.json({ status: 'admin is deleted' })
})

const updateAdmin = expressAsyncHandler(async (req, res) => {
    res.json({ status: 'admin is updated' })
})

export { getAllAdmin, finAdmin, addAdmin, deleteAdmin, updateAdmin }