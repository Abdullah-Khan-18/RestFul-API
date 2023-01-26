const express = require("express");
const OlympicDetail = require("../models/schema");

//-----------   create router    -----------//
const router = new express.Router();

//-----------   post    -----------//
router.post("/mens", async (req, res) => {
  try {
    const insertData = new OlympicDetail(req.body);
    const result = await insertData.save();
    res.status(201).send(result);
    console.log(result);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
});

//-----------   getData    -----------//
router.get("/mens/", async (req, res) => {
  try {
    const getData = await OlympicDetail.find();
    res.status(201).send(getData);
  } catch (error) {
    res.status(400).send(error);
  }
});

//-----------   getDataById    -----------//
router.get("/mens/:id", async (req, res) => {
  try {
    const getData = await OlympicDetail.findById(req.params.id);
    if (!req.params.id) {
      res.status.send("id is invalid");
    } else {
      res.status(201).send(getData);
    }
  } catch (error) {
    res.status(400).send("id is invalid");
  }
});

//-----------   patch    -----------//
router.patch("/mens/:id", async (req, res) => {
  try {
    const updateData = await OlympicDetail.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!req.params.id) {
      res.status.send("id is invalid");
    } else {
      res.status(201).send(updateData);
    }
  } catch (error) {
    res.status(400).send("id is invalid");
  }
});

//-----------   delete    -----------//
router.delete("/mens/:id", async (req, res) => {
  try {
    const deleteData = await OlympicDetail.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status.send("id is invalid");
    } else {
      res.status(201).send(deleteData);
    }
  } catch (error) {
    res.status(400).send("id is invalid");
  }
});

module.exports = router;
