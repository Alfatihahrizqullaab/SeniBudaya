const express = require('express');
const router = express.Router();
const upload = require("../../middleware/upload")
const BudayaController = require("../controllers/budayaController");

router.get("/", BudayaController.getAllBudaya);
router.get("/:id", BudayaController.getBudayaById);
router.post("/tambah-budaya", upload.single("gambar"), BudayaController.createBudaya);
router.delete("/hapus-budaya/:id", BudayaController.deleteBudaya);
router.put("/edit-budaya/:id", upload.single('gambar'), BudayaController.editBudaya);

module.exports = router;
