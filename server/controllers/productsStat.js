const { addProduct, getUserWithIdOf } = require("../db/database");
const CustomError = require("../error/custom-error");

const addProductStat = async (req, res) => {
  let { barcode, type, sub_type } = req.body;
  if (!sub_type) sub_type = null;

  if (sub_type) {
    if (!Number(sub_type))
      throw new CustomError(400, "sub_type must be of type int");
  }
  if (type) {
    if (!Number(type)) throw new CustomError(400, "type must be of type int");
  }

  const { username } = await getUserWithIdOf(req.user);
  const productStat = await addProduct(barcode, type, sub_type, username);
  res.status(200).json({ message: "product stat", productStat });
};

module.exports = { addProductStat };
