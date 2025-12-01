const express = require('express');
const router = express.Router();
const eventController = require("../controllers/eventController");

router.get("/", eventController.getAllEvent);
router.get("/:id", eventController.detailEvent);
router.post("/", eventController.createEvent);

module.exports = router;