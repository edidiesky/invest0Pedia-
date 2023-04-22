import mongoose from 'mongoose'

const MarketSchema = mongoose.Schema(


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
    profit: {
      type: Number,
      default: 0.0,
    },
    rate: {
      type: Number,
      default: 0.0,
    },
    volume: {
      type: Number,
      default: 0.0,
    },
    capacity: {
      type: Number,
      default: 0.0,
    }
  },
  {
    timestamps: true,
  }
)


export default mongoose.model("Market", MarketSchema)