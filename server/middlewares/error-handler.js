const CustomError = require("../error/custom-error");

const errorHandler = async (err, req, res, next) => {
  console.log("ERROR HANDLER >>>>", err);
  const errorObject = {
    status: 500,
    message: err,
  };

  //   CUSTOM ERROR
  if (err instanceof CustomError) {
    errorObject.status = err.status;
    errorObject.message = err.message;
  }

  //   VALIDATION ERROR
  if (err.name === "ValidationError") {
    errorObject.status = 400;
    errorObject.message = err.message;
  }

  //

  res.status(errorObject.status).json(errorObject);
};

module.exports = errorHandler;
