const { con } = require("../../config/mysqldb");

module.exports.deleteBrandSP = async (values) => {
    console.log(values);
    return new Promise((res, rej) => {
      let sql = `CALL delete_brand(?)`;
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