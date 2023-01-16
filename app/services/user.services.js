const { con } = require("../../config/mysqldb");

module.exports.addUserSP = async (values) => {
  return new Promise((res, rej) => {
    let sql = `CALL create_user(?,?,?,?,?)`;
    con.query(
      sql,
      [
        values.userName,
        values.password,
        values.roleID,
        values.storeID,
        values.pass
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

module.exports.updateUserSP = async (values) => {
  return new Promise((res, rej) => {
    let sql = `CALL update_user(?,?,?,?,?,?)`;
    con.query(
      sql,
      [
        values.userID,
        values.userName,
        values.password,
        values.roleID,
        values.storeID,
        values.pass,
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
