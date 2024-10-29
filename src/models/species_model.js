import mongoose from "mongoose";

const speciesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discoveryLocation: { type: String, required: true },
  rarity: { type: Number, required: true },
  documented: { type: Boolean, default: false }
});

export default mongoose.model("Species", speciesSchema);
