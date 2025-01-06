const {
  addProduct,
  getUserWithIdOf,
  checkBarcode,
  getProductsList,
} = require("../db/database");
const CustomError = require("../error/custom-error");

const getOneProductsList = async (req, res) => {
  const { barcode } = req.params;
  const product = await getProductsList(barcode);
  if (product.length === 0) {
    throw new CustomError(404, "Item doesn't exist");
  }
  res.status(200).json({ product });
};

const getProductQuantity = async (req, res) => {
  const { barcode } = req.params;
  const product = await getProductsList(barcode);
  if (product.length === 0) {
    throw new CustomError(404, "Item doesn't exist");
  }
  res.status(200).json({ quantity: product[0].quantity });
};

module.exports = { getOneProductsList, getProductQuantity };
