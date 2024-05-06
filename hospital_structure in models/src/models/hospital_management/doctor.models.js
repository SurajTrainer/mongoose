
import mongoose, { mongo } from 'mongoose'

const doctorSchema = new Schema({
  name : {
    type : String,
    required : true,
  },
  salary : {
    type : String,
    required : true,
  },
  qualification : {
    type : String,
    required : true,
  },
  expeienceInYear : {
    type : Number,
    default : 0,
    required : true,
  },
  worksInHospital : [
    {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Hospital"
},
],
},{timestamps : true})

export const Doctor = mongoose.model("Doctor", doctorSchema)
