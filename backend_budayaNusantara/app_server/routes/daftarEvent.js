const express = require("express");
const router = express.Router();
const daftarEventController = require("../controllers/daftarEventController");

router.post("/", daftarEventController.daftarEvent);
router.get("/:id", daftarEventController.detailDaftarEvent);
router.get("/", daftarEventController.getAllDaftarEvent);

module.exports = router