const Itemhome = require("../models/ItemHome");

const hometItemCtrl = {};

// CREATE ITEM HOME
hometItemCtrl.createHomeItem = async (req, res) => {
  const newItemHome = new Itemhome(req.body);

  try {
    const savedItemHome = await newItemHome.save();
    res.status(200).json(savedItemHome);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE ITEM HOME
hometItemCtrl.putItemHome = async (req, res) => {
  try {
    const updateItemHome = await Itemhome.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateItemHome);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET ALL ITEM HOME
hometItemCtrl.getAllItemHome = async (req, res) => {

  try {
    items = await Itemhome.find({active: true});
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = hometItemCtrl;
