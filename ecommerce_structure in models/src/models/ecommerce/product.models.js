
import mongoose from 'mongoose'

const productSchema = new Schema({

  //  in object line order not matters but in arrays matter

  description : {
    required : true,
    type : String,
  },
  name : {
    required : true,
    type : string,
  },
  productimage : {
    type : String
  },
  price : {
    type : Number,
    default : 0
  },
  stock  : {
      type : Number,
      default : 0
  },
  category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Category",
    required : true
  },
  Owner : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
} , {timestamps : true})


export const Product = mongoose.model("Product", productSchema)
