import express from "express";
import {
addFuel,
getFuel
} from "../controllers/fuelController.js";

const router = express.Router();

router.post("/",addFuel);
router.get("/",getFuel);

export default router;