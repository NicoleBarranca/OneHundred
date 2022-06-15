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
  res.json(res.roll);
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
router.patch("/:id", getRoll, async (req, res) => {
  if (req.body.name != null) {
    res.roll.name = req.body.name;
  }
  if (req.body.ingredients != null) {
    res.roll.ingredients = req.body.ingredients;
  }
  if (req.body.price != null) {
    res.roll.price = req.body.price;
  }
  try {
    const updatedRoll = await res.roll.save();
    res.json(updatedRoll);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting one
router.delete("/:id", getRoll, async (req, res) => {
  try {
    await res.roll.remove();
    res.json({ message: "Deleted Roll!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
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
