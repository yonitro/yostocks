const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/user-schema");

const currentURL = "http://localhost:3713/user/";

// Insert ScripList to DB
router.post("/", (req, res, next) => {
  const _usrid = new mongoose.Types.ObjectId();
  //Insert Scrip Details in DB
  const user = new User({
    _id: _usrid,
    email: req.body.username,
    username: req.body.email,
    password: req.body.password,
    marketwatch: [],
    notes: [],
  });

  user
    .save()
    .then((result) => {
      res.status(201).json({
        script_message: "User added successfully",
        createdPUser: {
          _id: result._id,
          email: result.email,
          username: result.username,
          marketwatch: result.marketwatch,
          notes: result.notes,
          info: {
            type: "POST",
            url: currentURL + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
