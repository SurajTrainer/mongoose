
import mongoose from 'mongoose'

const medical_recordSchema = new Schema({
  name : {
    type : String,
    required : true,
  },
  address : {
    type : String,
    required : true,
  },
  problems : {
    type : String,
    required : true,
  },
  injury : {
    type : String,
    required : true,
  }
},{timestamps : true})

export const MedicalRecord = mongoose.model("MedicalRecord", medical_recordSchema)
