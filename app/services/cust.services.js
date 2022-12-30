const { con } = require("../../config/mysqldb");

module.exports.addCustomerSP = async (values, storeID) => {
  return new Promise((res, rej) => {
    let sql = `CALL create_customer(?,?,?,?)`;
    con.query(
      sql,
      [values.name, values.mobileNo, values.city, storeID],
      function (err, result) {
        if (err) {
          console.error(err);
          rej(err);
        } else {
          console.error(result);
          res(result);
        }
      }
    );
  });
};
