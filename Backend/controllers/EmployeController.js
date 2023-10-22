import asynchandler from "express-async-handler";
import { EmployeModels } from "../models/EmployeModels.js";
import { EmployeSchema, validator } from "../validators/JoiSchemas.js";
import { ClientEntrModel } from "../models/ClientEntrepriseModel.js";

/**
 * @desc Get all employes
 * @route GET /employe
 * @access private
 */

const getAllEmployes = asynchandler(async (req, res) => {
    const Employes = await ClientEntrModel.findAll({ include: EmployeModels });
    if (!Employes) {
        throw new Error("not fond Employes")
    }
    res.status(200).json(Employes);
})

/**
 * @desc Get one employe
 * @route GET /Employe/:id
 * @access private
 */

const getOneEmploye = asynchandler(async (req, res) => {
    const { id } = req.params;
    const Employe = await EmployeModels.findByPk(id);
    if (!Employe) {
        res.status(401);
        throw new Error("Employe not found");
    }
    res.status(200).json(Employe);
})

/**
 * @desc create Employe
 * @route POST /Employe/
 * @access private
 */

const createEmploye = asynchandler(async (req, res) => {
    validator(EmployeSchema, req.body)
    const { fullName, email, companyId } = req.body;
    const company = await ClientEntrModel.findByPk(companyId);
    if(!company){
        res.status(404);
        res.json({message:"company is not fond"})
    }else{
        const newEmploye = await EmployeModels.create(
            {
                fullName: fullName,
                email: email,
                clientEntrepriseId:companyId
            }
        )
        if (!newEmploye) {
            res.status(404)
            throw new Error('Employe is not added');
        }
        res.status(200).json(newEmploye)
    }
})

export { getAllEmployes, getOneEmploye, createEmploye }
