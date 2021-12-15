const mongoose = require("mongoose");

const ItemhomeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    button: {
      type: Boolean,
      default: false,
      required: false,
    },
    linkbtn: {
      type: String,
      required: false,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
    reverse: {
      type: Boolean,
      default: false,
      required: true,
    },
    creator: {
      type: String,
      required: false,
    },
    updateby: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Itemhome", ItemhomeSchema);
