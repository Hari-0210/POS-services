const { con } = require("../../config/mysqldb");

module.exports.addProductSP = async (values, storeID) => {
  return new Promise((res, rej) => {
    let sql = `CALL create_product(?,?,?,?,?,?)`;
    con.query(
      sql,
      [
        values.productName,
        values.productCode,
        values.productCategory,
        values.productQty,
        values.productCost,
        storeID
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

module.exports.updateProductSP = async (values) => {
  return new Promise((res, rej) => {
    let sql = `CALL update_product(?,?,?,?,?,?,?)`;
    con.query(
      sql,
      [
        values.productID,
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

module.exports.deleteProductCategorySP = async (values) => {
  console.log(values);
  return new Promise((res, rej) => {
    let sql = `CALL delete_productCategory(?)`;
    con.query(
      sql,
      [
        values
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

