
import mongoose from "mongoose";


interface IUser {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type IUserModel = mongoose.Model<IUser> & {};


const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter password"],
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model<IUser, IUserModel>("User", schema);
