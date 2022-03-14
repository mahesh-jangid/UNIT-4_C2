const Master = require("../models/masterAcc.model");

const express = require("express");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const master = await Master.find().lean().exec();
    return res.send(master);
  } catch (err) {
    console.log(err);
  }
});

router.post("", async (req, res) => {
  try {
    const master = await Master.create(req.body);
    return res.send(master);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const master = await Master.findById(req.params._id).lean().exec();
    return res.send(master);
  } catch (err) {
    console.log(err);
  }
});
router.patch("/:_id", async (req, res) => {
  try {
    const master = await Master.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    return res.send(master);
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
