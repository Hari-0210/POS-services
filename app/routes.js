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
  addProduct,
  getProduct,
} = require("./controller/product.ctrl");
const { login, addUser, getUser } = require("./controller/user.ctrl");

router.post("/login", login);
router.post("/addUser", addUser);
router.get("/getUser", getUser);
router.post("/addProductCategory", addProductCategory);
router.post("/getProductCategory", getProductCategory);
router.put("/updateProductCategory", updateProductCategory);
router.get("/deleteProductCategory/:productCategoryID", deleteProductCategory);
router.post("/addProduct", addProduct);
router.post("/getProduct", getProduct);

router.post("/addBrand", addBrand);
router.post("/getBrand", getBrand);
router.put("/updateBrand", updateBrand);
router.get("/deleteBrand/:brandID", deleteBrand);

router.post("/login", login);
router.post("/addUser", addUser);
router.get("/getUser", getUser);

module.exports = router;
