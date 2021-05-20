const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ScripList = require("../models/scriplist-schema");
const Search = require("../models/search-index-schema");
const currentURL = "http://localhost:3713/scriplists/";

// Get all Scrip
router.get("/", (req, res, next) => {
  ScripList.find()
    .select("scripname scripcode currentprice updown color _id")
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// Insert ScripList to DB
router.post("/", (req, res, next) => {
  const _searchindexid = new mongoose.Types.ObjectId();

  const scriplist = new ScripList({
    _id: _searchindexid,
    scriptype: req.body.scriptype,
    scripname: req.body.scripname,
    scripcode: req.body.scripcode,    
    candlestickpattern: req.body.candlestickpattern,
  });
  const searchindex = new Search({
    scriptype: req.body.scriptype,
    _id: _searchindexid,
    scripid: req.body.scripid,
    scripname: req.body.scripname,
    scripcode: req.body.scripcode,
    
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

  scriplist
    .save()
    .then((result) => {
      res.status(201).json({
        message: "ScripList added successfully",
        createdProduct: {
          scriptype: result.scriptype,
          scripname: result.scripname,
          scripcode: result.scripcode,
          candlestickpattern: result.candlestickpattern,
          _id: result._id,
          info: {
            type: "GET",
            url: currentURL + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// Get ScripList by ID
router.get("/:scriplistID", (req, res, next) => {
  const id = req.params.scriplistID;
  ScripList.findById(id)
    .exec()
    .then((doc) => {
      // console.log(doc);
      //res.status(200).json(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid Id requested, check your request" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Update ScripList
// provide Json object like below to update Records
/*
          [
              {"propName" : "scripcode", "value": "777"}
          ]
  */
router.patch("/:scriplistID", (req, res, next) => {
  const id = req.params.scriplistID;
  const updateEntry = {};
  for (const entry of req.body) {
    updateEntry[entry.propName] = entry.value;
  }
  ScripList.update({ _id: id }, { $set: updateEntry })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "scriplist updated successfully",
        info: {
          type: "GET",
          url: currentURL + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Delete ScripList
router.delete("/:scriplistID", (req, res, next) => {
  const id = req.params.scriplistID;
  ScripList.remove({
    _id: id,
  })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "scriplist Deleted successfully",
        info: {
          desc: "You can add new scriplist using:",
          type: "POST",
          url: currentURL,
          data: { scripname: "String", scripcode: "Number" },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

// Search ScripList
router.get("/search/:name", (req, res, next) => {
  var regex = new RegExp(req.params.name, "i");
  ScripList.find({ scripname: regex }).sort({ scripname: 'ascending' })
    .exec()
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;