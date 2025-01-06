const { getUser, getUserWithIdOf } = require("../db/database");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const CustomError = require("../error/custom-error");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await getUser(username);
  console.log("usernaaamee", user);

  if (!user) {
    throw new CustomError(401, "Authentication Error");
  }

  //   Check if password matched

  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex")
    .slice(0, 50);

  if (hashedPassword !== user.password) {
    console.log("equal");
    throw new CustomError(401, "Authentication Error");
  }

  const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
    expiresIn: "30d",
  });
  const { password: passwordd, ...userWithoutPassword } = user;
  res.status(200).json({
    user: userWithoutPassword,
    token,
    message: "Logged in",
  });
};

const verify = async (req, res) => {
  const user = await getUserWithIdOf(req.user);

  if (!user) {
    throw new CustomError(401, "Authorization Error");
  }

  res.status(200).json({ message: "token verifed" });
};

module.exports = { login, verify };
