const { con } = require("../../config/mysqldb");

module.exports.addSalesSP = async (values) => {
  console.log(values);
  return new Promise((res, rej) => {
    let sql = `CALL add_sales(?,?,?,?,?,?,?,?,?)`;
    con.query(
      sql,
      [
        values.customerID,
        values.totalNoofProducts,
        values.subTotal,
        values.discount,
        values.packingCost,
        values.total,
        values.salesProductID,
        values.productID,
        values.productQty,
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
