const mongoose = require("mongoose");

const speciesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  discoveryLocation: { type: String, required: true },
  rarity: { type: Number, required: true },
  documented: { type: Boolean, default: false }
});

module.exports = mongoose.model("Species", speciesSchema);