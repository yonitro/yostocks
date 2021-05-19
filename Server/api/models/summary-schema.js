const mongoose = require("mongoose");

const SummarySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    quoteResponse: mongoose.Schema.Types.Mixed
  });

module.exports = mongoose.model("scripquote", SummarySchema);
 