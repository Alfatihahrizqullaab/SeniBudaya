const express = require('express');
const router = express.Router();
const upload = require("../../middleware/upload");
const eventController = require("../controllers/eventController");

router.get("/", eventController.getAllEvent);
router.get("/:id", eventController.detailEvent);
router.post("/", upload.single('gambar'), eventController.createEvent);

module.exports = router;