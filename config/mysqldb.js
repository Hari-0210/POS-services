const mysql = require("mysql");
const { mySQLconfig } = require("./index");
var con = mysql.createPool(mySQLconfig);
module.exports.db = () => {
  con.getConnection(function (err) {
    if (err) throw err;
    console.log("Connected to DB");
  });
};
exports.con = con;

