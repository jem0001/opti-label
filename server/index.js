const express = require("express");
const cors = require("cors");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
const authRouter = require("./routes/auth");
const authentication = require("./middlewares/authentication");
const productsStatRouter = require("./routes/productsStat");
const productsStatNoAuthRouter = require("./routes/productsStatNoAuth");
const productsListNoAuthRouter = require("./routes/productsListNoAuth");

require("express-async-errors");
require("dotenv").config();

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", async (req, res) => {
  res.status(200).send("hello from optilabel");
  console.log("hello from optilabel");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products-stat", authentication, productsStatRouter);
app.use("/api/v1/products-stat-no-auth", productsStatNoAuthRouter);
app.use("/api/v1/products-list-no-auth", productsListNoAuthRouter);

app.use(notFound);
app.use(errorHandler);

// SERVER CONNECTION
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () =>
  console.log("Server Listening on Port " + port)
);
