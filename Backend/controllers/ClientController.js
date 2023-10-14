import expressAsyncHandler from "express-async-handler";
import ClientModel from "../models/ClientModel.js";

/**
 * @desc Get all client
 * @route GET /client
 * @access public
 */

const allClient = expressAsyncHandler( async(req, res) => {
    const client = await ClientModel.findAll()
    res.status(200).json(client);
})

/**
 * @desc Get all client
 * @route GET /client
 * @access public
 */

const saveClient = expressAsyncHandler(async(req, res) => {
    
})

/**
 * @desc Get all client
 * @route GET /client
 * @access public
 */

const updateClient = expressAsyncHandler(async(req, res) => {
    console.log("update client");
})

/**
 * @desc Get all client
 * @route GET /client
 * @access public
 */

const deleteClient  = expressAsyncHandler(async(req, res) => {
    console.log("delete client");
})

export {allClient};