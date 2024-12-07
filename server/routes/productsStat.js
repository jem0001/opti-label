const express = require("express");
const { addProductStat } = require("../controllers/productsStat");

const router = express.Router();

router.route("/").post(addProductStat);

module.exports = router;
