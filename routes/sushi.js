const express = require("express");
const router = express.Router();
const Roll = require("../models/roll");

// Getting all
router.get("/", async (req, res) => {
  try {
    const sushi = await Roll.find();
    res.json(sushi);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Getting One
router.get("/:id", getRoll, (req, res) => {
  res.send(res.roll.name);
});

// Creating One
router.post("/", async (req, res) => {
  const roll = new Roll({
    name: req.body.name,
    ingredients: req.body.ingredients,
    price: req.body.price,
  });

  try {
    const newRoll = await roll.save();
    res.status(201).json(newRoll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Updating One (can also user .patch)
router.put("/", (req, res) => {});

// Deleting one
router.delete("/:id", (req, res) => {
  res.roll;
});

// middleware
async function getRoll(req, res, next) {
  let roll;
  try {
    roll = await Roll.findById(req.params.id);
    if (roll == null) {
      return res.status(404).json({ message: "Cannot find Roll" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.roll = roll;
  next();
}

module.exports = router;
