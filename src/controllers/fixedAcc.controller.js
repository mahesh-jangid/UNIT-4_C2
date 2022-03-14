const Fixed = require("../models/fixedAcc.model");

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
    const Fixed = await Fixed.create(req.body);
    return res.send(Fixed);
  } catch (err) {
    console.log(err);
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    const master = await Master.findOneAndDelete(req.params._id);
    return res.send(master);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
