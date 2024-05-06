
import mongoose from "mongoose"

const subtodoSchema = new Schema({}, {timestamps : true})

export const SubTodo = mongoose.model('SubTodo', subtodoSchema)
