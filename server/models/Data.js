const mongoose = require("mongoose");

const HoldingSchema = mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    oortfolio : { type: Object, required : true }
  },
  { timestamps: true }
);

const Holdings = mongoose.model("Holdings", HoldingSchema);
module.exports = Holdings;
