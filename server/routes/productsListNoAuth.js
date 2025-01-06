const express = require("express");
const {
  getOneProductsList,
  getProductQuantity,
} = require("../controllers/productsListNoAuth");

const router = express.Router();

router.route("/:barcode").get(getOneProductsList);
router.route("/product-quantity/:barcode").get(getProductQuantity);

module.exports = router;
