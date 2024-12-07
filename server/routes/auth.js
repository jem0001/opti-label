const express = require("express");
const { login, verify } = require("../controllers/auth");
const authentication = require("../middlewares/authentication");

const router = express.Router();

router.route("/login").post(login);
router.route("/verify").get(authentication, verify);

module.exports = router;
