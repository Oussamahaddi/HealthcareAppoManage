import Router from "express";
import {getAllReservation, createReservation} from "../controllers/ReservationController.js";
import { verifyRole } from "../middleware/verifyRole.js";
import ROLE_LIST from "../config/Role_list.js";

const router = Router();

/**
 * @GET
 * @desc // create reservation
 * @access private
 */

router.get("/", verifyRole(ROLE_LIST.admin), getAllReservation);

/**
 * @POST
 * @desc // Create reservation
 * @access private
 */

router.post("/", verifyRole(ROLE_LIST.client, ROLE_LIST.entreprise), createReservation);

export default router;