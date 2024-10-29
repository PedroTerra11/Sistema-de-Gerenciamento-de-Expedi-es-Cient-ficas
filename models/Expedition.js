const mongoose = require("mongoose");

const expeditionSchema = new mongoose.Schema({
  location: { type: String, required: true },
  date: { type: Date, required: true },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Explorer" }],
  speciesFound: [{ type: mongoose.Schema.Types.ObjectId, ref: "Species" }]
});

module.exports = mongoose.model("Expedition", expeditionSchema);