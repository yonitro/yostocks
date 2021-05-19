const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Search = require("../models/search-index-schema");

// Insert ScripList to DB
router.post("/", (req, res, next) => {
  const _searchindexid = new mongoose.Types.ObjectId();
  //Insert Scrip Details in DB
  const searchindex = new Search({
    _id: _searchindexid,
    scripid: req.body.scripid,
    scripname: req.body.scripname,
    scripcode: req.body.scripcode,
    scriptype: req.body.scriptype,
  });

  searchindex
    .save()    
    .then((result) => {
      res.status(201).json({
        script_message: "Indexed successfully",
        _id: result.id,
        scripid: result.scripid,
        scripname: result.scripname,
        scripcode: result.scripcode,
        scriptype: result.scriptype,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
