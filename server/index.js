const express = require("express");
require("dotenv").config();

const app = express();

// MIDDLEWARES
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
  res.status(200).send("Hello from OptiLabel");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server Listening on Port " + port));
