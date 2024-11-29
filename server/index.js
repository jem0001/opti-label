const express = require("express");
const cors = require("cors");
const rackMasterListRouter = require("./routes/rackMasterList");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
require("express-async-errors");
require("dotenv").config();

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/", async (req, res) => {
  res.send("hello from optilabel");
});

app.use("/api/v1/rack-master-list", rackMasterListRouter);

app.use(notFound);
app.use(errorHandler);

// SERVER CONNECTION
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server Listening on Port " + port));
