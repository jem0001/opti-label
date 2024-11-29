const express = require("express");
const { getCategories } = require("../controllers/categories");

const router = express.Router();

router.route("/").get(getCategories);

module.exports = router;
