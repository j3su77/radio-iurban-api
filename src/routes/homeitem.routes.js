const express =  require("express");
const homeItemCtrl =  require("../controllers/homeitem.controllers");

const router = express.Router();

// CREATE ITEM HOME
router.post("/", homeItemCtrl.createHomeItem)

// UPDATE ITEM HOME
router.put("/:id", homeItemCtrl.putItemHome)

// GET ALL ITEM HOME
router.get("/", homeItemCtrl.getAllItemHome)

module.exports = router;
