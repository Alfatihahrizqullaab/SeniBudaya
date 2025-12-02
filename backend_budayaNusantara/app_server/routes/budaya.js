const express = require('express');
const router = express.Router();
const upload = require("../../middleware/upload")
const BudayaController = require("../controllers/budayaController");

router.get("/", BudayaController.getAllBudaya);
router.get("/:id", BudayaController.getBudayaById);
router.post("/tambah-budaya", upload.single("gambar"), BudayaController.createBudaya);

module.exports = router;
