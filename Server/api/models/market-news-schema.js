const mongoose = require("mongoose");

const MarketNewsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    stream: mongoose.Schema.Types.Mixed
  });

module.exports = mongoose.model("marketnews", MarketNewsSchema);
 