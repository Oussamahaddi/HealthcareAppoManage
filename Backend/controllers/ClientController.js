import expressAsyncHandler from "express-async-handler";

/**
 * @desc Get all Succurcal
 * @route GET /Succurcal
 * @access public
 */

const allClient = expressAsyncHandler( async(req, res) => {
    console.log("All client");
})
const saveClient = expressAsyncHandler(async(req, res) => {
    console.log("save cleint ");
})
const updateClient = expressAsyncHandler(async(req, res) => {
    console.log("update client");
})
const deleteClient  = expressAsyncHandler(async(req, res) => {
    console.log("delete client");
})