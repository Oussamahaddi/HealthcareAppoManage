import SuccurcalModel from "../models/SuccurcalModel.js";
import asynchandler from "express-async-handler";

/**
 * @desc Get all Succurcal
 * @route GET /Succurcal
 * @access public
 */

const getAllSuccurcal = asynchandler(async (req, res) => {
    console.log("Get all succurcal");
    res.send("hello ismail")
    // const Succurcals = await SuccurcalModel.findAll();
    // res.status(200).json(Succurcals);
});
const saveSuccurcal = asynchandler(async (req, res) => {
    console.log("save succurcal");
});
const updateSuccurcal = asynchandler(async (req, res) => {
    console.log("update succurcal");
});
const deleteSuccurcal = asynchandler(async (req, res) => {
    console.log("delete succurcal");
});

export { getAllSuccurcal, saveSuccurcal, updateSuccurcal, deleteSuccurcal };
