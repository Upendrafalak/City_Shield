import mongoose from "mongoose";

const CrimeSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      maxlength: 60,
    },
    crime_location: {
      type: String,
      required: true,
      maxlength: 60,
    },
    crime_type:{
      type:String,
      required: true,
      maxlength: 60,
    },
    crime_details: {
      type: String,
      required: true,
      maxlength: 500,
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
  },
  { timestamps: true }
);

export default mongoose.models.Crime || mongoose.model("Crime", CrimeSchema);
