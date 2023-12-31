import express from "express";
import {
    allCompany,
    createCompany
} from "../controllers/ClientEntrepriseController.js";

const router = express.Router();

router.get("/", allCompany);

router.post("/", createCompany);

export default router;
