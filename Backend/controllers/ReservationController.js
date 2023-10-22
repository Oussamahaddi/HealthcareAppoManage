import asynchandler from "express-async-handler";
import { ReservationSchema, validator } from "../validators/JoiSchemas.js";
import { ReservationModel, ClientEntrModel, ClientModel, SuccurcalModel, UserModel } from "../models/index.js";


/**
 * @desc Get all Reservation
 * @route GET /Admin
 * @access private
 */

const getAllReservation = asynchandler(async (req, res) => {
    const reservations = await ReservationModel.findAll({include : [UserModel]});
    if (!reservations) throw new Error("No reservation found");
    res.status(200).json(reservations);
})

/**
 * @desc Get all Reservation
 * @route GET /Admin
 * @access private
 */

const createReservation = asynchandler(async (req, res) => {
    validator(ReservationSchema, req.body);

    const {succurcalId} = req.body;

    const checkSuccurcal = await SuccurcalModel.findByPk(succurcalId);
    
    if (!checkSuccurcal) throw new Error("No succurcal with this id");

    const reserved = await ReservationModel.create({
        userId : req.user.actorId,
        SuccurcalId : succurcalId,
    }, {
        include : [ReservationModel.succurcal]
    });

    if (!reserved) throw new Error ("Something wrong while reservation");
    res.status(201).json(reserved);
})


export {getAllReservation, createReservation}