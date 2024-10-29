import mongoose from "mongoose";

const explorerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  expeditionsParticipated: { type: Number, default: 0 }
});

export default mongoose.model("Explorer", explorerSchema);
