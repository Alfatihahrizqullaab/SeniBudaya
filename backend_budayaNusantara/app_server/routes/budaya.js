const express = require('express');
const router = express.Router();
const BudayaController = require("../controllers/budayaController");

router.get("/", BudayaController.getAllBudaya);
router.get("/:id", BudayaController.getBudayaById);
router.post("/tambah-budaya", BudayaController.createBudaya);

module.exports = router;
