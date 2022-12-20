const router = require("express").Router();
const {
  addBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("./controller/brand.ctrl");
const {
  addProductCategory,
  getProductCategory,
  updateProductCategory,
  deleteProductCategory,
} = require("./controller/product.ctrl");
const { login, addUser, getUser } = require("./controller/user.ctrl");

router.post("/login", login);
router.post("/addUser", addUser);
router.get("/getUser", getUser);
router.post("/addProductCategory", addProductCategory);
router.get("/getProductCategory", getProductCategory);
router.put("/updateProductCategory", updateProductCategory);
router.delete("/deleteProductCategory", deleteProductCategory);

router.post("/addBrand", addBrand);
router.get("/getBrand", getBrand);
router.put("/updateBrand", updateBrand);
router.delete("/deleteBrand", deleteBrand);

module.exports = router;
