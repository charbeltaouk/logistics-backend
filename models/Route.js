const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    from: { type: String },
    to: { type: String },
    places: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Route", RouteSchema);
