const router = require("express").Router();
const {
  addBrand,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("./controller/brand.ctrl");
const { addCompanyDetails, getCompanyDetails, updatePassword } = require("./controller/companyDetails.ctrl");
const { getCustomer, addCustomer, deleteCustomer } = require("./controller/cust.ctrl");
const { addDummySales, getDummySales, dummyDeleteSales } = require("./controller/dSales.ctrl");
const {
  addProductCategory,
  getProductCategory,
  updateProductCategory,
  deleteProductCategory,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductByCategory,
} = require("./controller/product.ctrl");
const {
  addSales,
  getSales,
  deleteSales,
  updateSales,
} = require("./controller/sales.ctrl");
const {
  addStore,
  getStore,
  updateStore,
  deleteStore,
} = require("./controller/store.ctrl");
const { uploadLogo } = require("./controller/upload.ctrl");
const { login, addUser, getUser, updateUser } = require("./controller/user.ctrl");
const uploadFile = require("./middlewares/upload");

// CRUD User
router.post("/login", login);
router.post("/addUser", addUser);
router.put("/updateUser", updateUser);
router.get("/getUser", getUser);

// CRUD Product Category
router.post("/addProductCategory", addProductCategory);
router.post("/getProductCategory", getProductCategory);
router.put("/updateProductCategory", updateProductCategory);
router.get("/deleteProductCategory/:productCategoryID", deleteProductCategory);

router.get("/getProductByCategory/:productCategoryID", getProductByCategory);

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

// CRUD Store
router.post("/addStore", addStore);
router.post("/getStore", getStore);
router.put("/updateStore", updateStore);
router.get("/deleteStore/:storeID", deleteStore);

router.get("/getCustomer", getCustomer);
router.post("/addCustomer", addCustomer);
router.get("/deleteCustomer/:customerID", deleteCustomer);

router.post("/addSales", addSales);
router.get("/getSales", getSales);
router.put("/updateSales", updateSales);
router.get("/deleteSales/:salesMasterID", deleteSales);


router.post("/addDummySales", addDummySales);
router.get("/getDummySales", getDummySales);
router.get("/dummyDeleteSales/:dummySalesMasterID", dummyDeleteSales);

router.post("/addCompanyDetails", addCompanyDetails);
router.get("/getCompanyDetails", getCompanyDetails);
router.post("/updatePassword", updatePassword);



router.post('/uploadAvatar', uploadFile.single("file"), uploadLogo)



module.exports = router;
