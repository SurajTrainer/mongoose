
import mongoose from 'mongoose'

const userSchema = new Schema(
  // we can define it 2 types
  // 1st 
  // {username : String , email : String , }

  // & 2nd type
  {
    username : {
      type : String,
      required : true,
      unique : true,
      uppercase : true
    }
  }
)

export const User = mongoose.model("User", userSchema);