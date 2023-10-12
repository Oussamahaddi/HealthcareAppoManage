import expressAsyncHandler from "express-async-handler";
const joi = require("joi")

/**
 * @desc Get all Succurcal
 * @route GET /Succurcal
 * @access public
 */

const getAllAdmin = expressAsyncHandler(async (req, res) => {
    res.json({
        id: '1',
        prenom: 'oussama',
        nom: 'hadi',
        cin: '12345678',
        cne: 'sdfghjkl'
    })
})

const finAdmin = expressAsyncHandler(async (req, res) => {

})

const addAdmin = expressAsyncHandler(async (req, res) => {
    const {first_name,last_name,password,profile_image} = req.body;
    console.log(req.body);
    const adminSchema = joi.object({
        first_name: joi.string().length(20).required(),
        last_name: joi.string.length(20).required(),
        password: joi.string.min(10).required(),
        profile_image: joi.string().required()
    })
})

const deleteAdmin = expressAsyncHandler(async (req, res) => {
    
    res.json({ status: 'admin is deleted' })
})

const updateAdmin = expressAsyncHandler(async (req, res) => {
    res.json({ status: 'admin is updated' })
})

export { getAllAdmin,finAdmin,addAdmin,deleteAdmin,updateAdmin}