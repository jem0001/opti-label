const express = require("express");
const { getRackMasterList } = require("../controllers/rackMasterList");

const router = express.Router();

router.route("/").get(getRackMasterList);

module.exports = router;
