const mongoose = require("mongoose");
const User = require("../models/user.model");
const savingAccSchema = new mongoose.Schema(
  {
    account_number: { type: String, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("savingAcc", savingAccSchema);
