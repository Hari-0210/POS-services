
const { con } = require("../config/mysqldb")

const query = async (QUERY) => {
    return new Promise((res, rej) => {
            con.query(QUERY, function (err, result) {
                if (err) {
                    console.log("hi1");
                    rej(err)
                    throw err;
                }
                res(result);
            })
    })
}
module.exports = { query }