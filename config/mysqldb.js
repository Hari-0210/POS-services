const mysql = require("mysql");
const { mySQLconfig } = require("./index");
var con = mysql.createConnection(mySQLconfig);
module.exports.db = () => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
};
