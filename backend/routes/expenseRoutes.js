const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const ROLES = require("../constants/roles");
const {
    createExpense,
    getExpenses,
    getExpenseById,
    updateExpense,
    deleteExpense
} = require("../controllers/expenseController");

router.post(
    "/",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.FINANCIAL_ANALYST),
    createExpense
);

router.get(
    "/",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.FINANCIAL_ANALYST),
    getExpenses
);

router.get(
    "/:id",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.FINANCIAL_ANALYST),
    getExpenseById
);

router.put(
    "/:id",
    protect,
    authorize(ROLES.FLEET_MANAGER, ROLES.FINANCIAL_ANALYST),
    updateExpense
);

router.delete("/:id", protect, authorize(ROLES.FLEET_MANAGER), deleteExpense);

module.exports = router;
