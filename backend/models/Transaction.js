import mongoose from 'mongoose'
const transactionItemsSchema = mongoose.Schema({
  plan: { type: String, required: true },
  image: { type: Array, required: true },
  price: { type: Number, required: true },
  tier: {
    type: String,
    enum: ['tier1', 'tier2', 'tier3'],
    default: 'tier1'
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  rate: { type: Number },
}, {
  timestamps:true
})
const transactionSchema = mongoose.Schema(

  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',

    },
    transactionItems: [transactionItemsSchema],
    paymentMethod: {
      type: String,
      default: 'Bitcoin',
    },
    estimatedTax: {
      type: Number,
      required: true,
      default: 0.0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['failed', 'pending', 'success'],
      default: 'pending'
    },
    profit: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
)


export default mongoose.model("Transaction", transactionSchema)