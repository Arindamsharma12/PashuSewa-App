import mongoose from "mongoose";

const animalReportSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username:{
      type:String,
      required:true,
    },
    animal_type: {
      type: String,
      required: true,
      trim: true,
    },
    injury_type: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      required: true,
    },
    coverImage:{
      type:String,
    },
    status: {
      type: String,
      enum: ["pending", "verified", "treated"],
      default: "pending",
    },
    report_url: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export const AnimalReport = mongoose.model("AnimalReport", animalReportSchema);

