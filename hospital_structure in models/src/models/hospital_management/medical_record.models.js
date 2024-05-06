
import mongoose from 'mongoose'

const doctorSchema = new Schema({},{timestamps : true})

export const Doctor = mongoose.model("Doctor", doctorSchema)