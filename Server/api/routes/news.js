const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const MarketNewsSchema = require("../models/market-news-schema");
const currentURL = "http://localhost:3713/scriplists/";

// Get all Scrip
router.get("/", (req, res, next) => {
  MarketNewsSchema.find()
    .select("_id stream")
    .exec()
    .then((docs) => {     
      const response = {
       
        products: docs.map((doc) => {
          return {
            scripname: doc["stream"],
           
          };
        }),
      };

      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});



module.exports = router;
