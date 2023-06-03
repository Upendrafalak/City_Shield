import mongoose from "mongoose";

const ComplainSchema = new mongoose.Schema(
  {
//     crime_location: {
//       type: String,
//       required: true,
//       maxlength: 60,
//     },
//     crime_type:{
//         type:String,
//         required: true,
//         maxlength: 60,
//       },
//     crime_details: {
//       type: String,
//       required: true,
//       maxlength: 500,
//     },
//     evidance: {
//       type: String,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     number: {
//       type: Number,
//       required: true,
//     },
//   },

    crime_type:String,
    crime_location:String,
  },
  { timestamps: true }
);

const PoliceSchema1 = new mongoose.Schema({
    name: String,
    crime: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Crime'
    }
  });

  const Crime = mongoose.model('Crime', ComplainSchema);

  // Create Book model
  const Police = mongoose.model('Police', PoliceSchema1);

  Police.find({})
  .populate('crime')
  .exec((err, designation) => {
    if (err) {
      console.error(err);
    } else {
      console.log(designation);
    }
  });
export default mongoose.models.Complain || mongoose.model("Complain", ComplainSchema);
