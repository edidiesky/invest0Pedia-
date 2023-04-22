import mongoose from 'mongoose'

const CoinCartSchema = mongoose.Schema(

  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',

    },
    price: {
      type: Number,
      default: 0.0,
    },
    plan: {
      type: String,
      required: true,
    },
    tier: {
      type: String,
      enum: ['tier1', 'tier2', 'tier3'],
      default: 'tier1'
    },
    image: {
      type: String
    },
    rate: {
      type: Number
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    profit: {
      type: Number,
      default: 0
    },
    tax: {
      type: Number,
      default: 0
    },
    yieldburn:{
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
)


export default mongoose.model("CoinCart", CoinCartSchema)