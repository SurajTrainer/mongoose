import mongoose from 'mongoose';

const userSchema = new Schema(
  // we can define it 2 types
  // 1st
  // {username : String , email : String , }

  // & 2nd type
  {
    username: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);
