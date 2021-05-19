const mongoose = require("mongoose");

const scriplistSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  scriptype: String,
  scripname: String,
  scripcode: String,
  scripmarket: String,
  currentprice: String,
  updown: String,
  color: String,
  candlestickpattern: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("scriplists", scriplistSchema);

