const categories = require("../dummyCategories.json");

const getCategories = async (req, res) => {
  res.status(200).json({ categories });
  res.send;
};

module.exports = { getCategories };
