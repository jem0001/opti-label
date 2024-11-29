const notFound = async (req, res) => {
  res.status(404).send("ROUTE NOT FOUND");
};

module.exports = notFound;
