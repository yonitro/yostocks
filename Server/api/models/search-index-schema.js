const mongoose = require("mongoose");

const SearchIndexSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  scripid: String,
  scripname: String,
  scripcode: String,
  scriptype: String,
});

module.exports = mongoose.model("searchindex", SearchIndexSchema);
