const express = require("express");
const router = express.Router();

// Getting all
router.get("/", (req, res) => {
  res.send("Hello Wurld");
});

// Getting One
router.get("/:id", (req, res) => {});

// Creating One
router.post("/", (req, res) => {});

// Updating One (can also user .patch)
router.put("/", (req, res) => {});

// Deleting one
router.delete("/:id", (req, res) => {});

module.exports = router;
