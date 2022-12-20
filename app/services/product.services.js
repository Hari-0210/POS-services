const { con } = require("../../config/mysqldb");

module.exports.addProductSP = async (values) => {
  return new Promise((res, rej) => {
    let sql = `CALL create_product(?,?,?,?,?,?)`;
    con.query(
      sql,
      [
        values.productName,
        values.productCode,
        values.productCategory,
        values.brand,
        values.productQty,
        values.productCost,
      ],
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
