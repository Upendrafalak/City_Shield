import mongoose from "mongoose";

const OnlinecrimeSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      maxlength: 60,
    },
    tweet: {
      type: String,
      required: true,
      maxlength: 60,
    },
    username: {
      type: String,
      required: true,
      maxlength: 60,
    },
    evidance: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    progress: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Onlinecrime ||
  mongoose.model("Onlinecrime", OnlinecrimeSchema);
