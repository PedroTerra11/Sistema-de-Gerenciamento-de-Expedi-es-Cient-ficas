const mongoose = require("mongoose");

const explorerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fieldOfStudy: { type: String, required: true },
  expeditionsParticipated: { type: Number, default: 0 }
});

module.exports = mongoose.model("Explorer", explorerSchema);