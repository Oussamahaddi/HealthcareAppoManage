import { Router } from "express";
import { allClient } from "../controllers/ClientController.js";

const router = Router();

router.get("/", allClient);

export default router;