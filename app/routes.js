const router = require("express").Router();
const {
  addBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("./controller/brand.ctrl");
const { getCustomer, addCustomer } = require("./controller/cust.ctrl");
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
const { addSales, getSales, deleteSales } = require("./controller/sales.ctrl");
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

router.get("/getCustomer", getCustomer);
router.post("/addCustomer", addCustomer);

router.post("/addSales", addSales);
router.get("/getSales", getSales);
router.get("/deleteSales/:salesMasterID", deleteSales);

module.exports = router;
