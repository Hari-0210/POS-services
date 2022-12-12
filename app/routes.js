const router = require("express").Router();
const { login, addUser } = require("./controller/user.ctrl");



router.post('/login', login);
router.post('/addUser', addUser);
module.exports = router;
