const Tea = require("../models/Tea.js");
// const teas = require('../data/teas.json');
// .get(function(request, response){
// 	console.log(teas);
// 	response.json(teas);
// });
module.exports = {
  getTea: async (req, res, next) => {
    const data = await Tea.find({});
    console.log("got tea");
    res.status(200).json({ data });
  },
  getBlackTea: async (req, res, next) => {
    const data = await Tea.find({ type: "Black" });
    res.status(200).json({ data });
  },
  getGreenTea: async (req, res, next) => {
    const data = await Tea.find({ type: "Green" });
    res.status(200).json({ data });
  },
  getOolongTea: async (req, res, next) => {
    const data = await Tea.find({ type: "Oolong" });
    res.status(200).json({ data });
  },
  getWhiteTea: async (req, res, next) => {
    const data = await Tea.find({ type: "White" });
    res.status(200).json({ data });
  },
  getHerbalTea: async (req, res, next) => {
    const data = await Tea.find({ type: "Herbal" });
    res.status(200).json({ data });
  },
  getPuerhTea: async (req, res, next) => {
    const data = await Tea.find({ type: "Pu-erh" });
    res.status(200).json({ data });
  },
  getFruitBlendTea: async (req, res, next) => {
    const data = await Tea.find({ type: "Fruit Blend" });
    res.status(200).json({ data });
  },
  postTea: async (req, res, next) => {
    const {
      name,
      description,
      benefits,
      type,
      brew,
      origin,
      imageUrl,
      handle,
      tags,
      comments,
    } = req.body;

    //create new tea
    const newTea = new Tea({
      name,
      description,
      benefits,
      type,
      brew,
      origin,
      imageUrl,
      handle,
      tags,
      comments,
    });
    await newTea.save();
    //respond with message
    res.status(200).json({ success: "Successfully added to database!" });
  },
  updateTea: async (req, res, next) => {
    const {
      name,
      description,
      benefits,
      type,
      brew,
      origin,
      imageUrl,
      handle,
      tags,
      comments,
    } = req.body;

    const foundTea = await Tea.findByIdAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: {
          name,
          description,
          benefits,
          type,
          brew,
          origin,
          imageUrl,
          handle,
          tags,
          comments,
        },
      },
      (err) => {
        if (err) return err;
      }
    );
    res.status(200).send({ success: "Successfully updated" });
  },
  deleteTea: async (req, res, next) => {
    const foundTea = await Tea.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ success: "Successfully deleted." });
  },
};
