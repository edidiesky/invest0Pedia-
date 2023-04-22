import mongoose from "mongoose";

import bcrypt from "bcryptjs";
const WalletSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    address: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);
WalletSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Wallet", WalletSchema);
