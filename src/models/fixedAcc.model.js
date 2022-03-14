const mongoose = require("mongoose");
const User = require("../models/user.model");
const fixedAccSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: String, required: true },
    startDate: { type: Date, required: true },
    maturityDate: { type: Date, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("fixedAcc", fixedAccSchema);
