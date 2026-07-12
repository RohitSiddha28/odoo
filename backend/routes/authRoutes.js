const express = require("express");

const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const {
    register,
    login
} = require("../controllers/authController");

router.post("/register", register);
router.post(
    "/users",
    protect,
    authorize(ROLES.FLEET_MANAGER),
    register
);

router.post("/login", login);

module.exports = router;
