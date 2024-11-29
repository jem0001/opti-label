const { getRacks } = require("../db/database");

const getRackMasterList = async (req, res) => {
  const racks = await getRacks();
  res.status(200).json({ racks });
};

module.exports = { getRackMasterList };
