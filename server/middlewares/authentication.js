const jwt = require("jsonwebtoken");
const CustomError = require("../error/custom-error");

const authentication = async (req, res, next) => {
  // POSTMAN AUTH
  if (req.headers.authorization) {
    if (req.headers.authorization.startsWith("Bearer ")) {
      let token = req.headers.authorization.split(" ")[1];

      const payload = jwt.verify(token, process.env.SECRET_KEY);
      req.user = payload.userId;
      return next();
    }
  }

  //   POSTMAN AUTH
  if (!req.headers.authorization) {
    throw new CustomError(401, "Authorization Error, provide token");
  }
};

module.exports = authentication;
