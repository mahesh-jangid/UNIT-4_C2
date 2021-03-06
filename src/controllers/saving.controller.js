const Saving = require("../models/savingAcc.model");

const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const saving = await Saving.find().lean().exec();
    return res.send(saving);
  } catch (err) {
    console.log(err);
  }
});

router.post("", async (req, res) => {
  try {
    const saving = await Saving.create(req.body);
    return res.send(saving);
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const saving = await Saving.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      { new: true }
    );
    return res.send(saving);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
