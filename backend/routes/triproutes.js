import express from "express";
import {
createTrip,
getTrips,
completeTrip
} from "../controllers/tripController.js";

const router = express.Router();

router.post("/",createTrip);
router.get("/",getTrips);
router.put("/:id",completeTrip);

export default router;