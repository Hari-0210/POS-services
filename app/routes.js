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
  updateProduct,
  deleteProduct,
} = require("./controller/product.ctrl");
const { login, addUser, getUser } = require("./controller/user.ctrl");

// CRUD User
router.post("/login", login);
router.post("/addUser", addUser);
router.get("/getUser", getUser);

// CRUD Product Category
router.post("/addProductCategory", addProductCategory);
router.post("/getProductCategory", getProductCategory);
router.put("/updateProductCategory", updateProductCategory);
router.get("/deleteProductCategory/:productCategoryID", deleteProductCategory);

// CRUD Product
router.post("/addProduct", addProduct);
router.put("/updateProduct", updateProduct);
router.post("/getProduct", getProduct);
router.get("/deleteProduct/:productID", deleteProduct);

// CRUD Brand
router.post("/addBrand", addBrand);
router.post("/getBrand", getBrand);
router.put("/updateBrand", updateBrand);
router.get("/deleteBrand/:brandID", deleteBrand);


module.exports = router;
