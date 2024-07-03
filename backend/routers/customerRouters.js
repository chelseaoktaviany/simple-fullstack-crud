const express = require("express");

const CustomerModel = require("../models/customerModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const customers = await CustomerModel.find();

    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const data = await CustomerModel.create({
    name: req.body.name,
    emailAddress: req.body.emailAddress,
  });

  try {
    const savedData = await data.save();

    res.status(200).json(savedData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatedData = req.body;
    const options = { new: true };

    const result = await CustomerModel.findByIdAndUpdate(
      id,
      updatedData,
      options
    );

    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
