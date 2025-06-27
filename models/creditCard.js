import mongoose from "mongoose";

const creditCardSchema = new mongoose.Schema({
  ccNumber: {
    type: String,
    required: true,
  },
  expiration: {
    type: String,
    required: true,
  },
  ccv: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    default: Date.now,
  },
});

const CreditCard = mongoose.model("CreditCard", creditCardSchema);

export default CreditCard;
