import mongoose from "mongoose";

const PoliceSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxlength: 60,
    },
    lastname: {
      type: String,
      required: true,
      maxlength: 60,
    },
    designation: {
      type: String,
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
    },
    posting: {
      type: String,
      required: true,
    },
    case: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Police || mongoose.model("Police", PoliceSchema);
