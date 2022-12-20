const router = require("express").Router();
const { addProductCategory, getProductCategory, updateProductCategory, deleteProductCategory } = require("./controller/product.ctrl");
const { login, addUser, getUser } = require("./controller/user.ctrl");



router.post('/login', login);
router.post('/addUser', addUser);
router.get('/getUser', getUser);
router.post('/addProductCategory', addProductCategory);
router.post('/getProductCategory', getProductCategory);
router.put('/updateProductCategory', updateProductCategory);
router.get('/deleteProductCategory/:productCategoryID', deleteProductCategory);



module.exports = router;
