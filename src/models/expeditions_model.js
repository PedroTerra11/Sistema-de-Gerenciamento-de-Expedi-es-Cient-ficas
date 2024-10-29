import mongoose from "mongoose";

const expeditionSchema = new mongoose.Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Explorer" }],
  speciesFound: [{ type: mongoose.Schema.Types.ObjectId, ref: "Species" }]
});

const Expedition = mongoose.model("Expedition", expeditionSchema);

export default Expedition;
