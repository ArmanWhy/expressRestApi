import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
   name: {
    type: String,
    required: true,
    trim: true
   },
   shop_address: {
    type: String,
    required: true,
    trim: true
   },
   product_category: {
    type: String,
    required: true,
    trim: true
   },
   product_price: {
    type: mongoose.Decimal128,
    required: true,
    validate: (value) => value >= 500
   },
})

const shopModel = mongoose.model('shop', shopSchema)

export default shopModel