import mongoose from "mongoose";

const colorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    hex: { type: String, required: true }, // ej: #3498db
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Color", colorSchema);
