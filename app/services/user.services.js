const { con } = require("../../config/mysqldb")



module.exports.addUserSP = async (values) => {
    return new Promise((res, rej) => {
            let sql = `CALL create_user(?,?)`
            con.query(sql, [
                values.userName, values.password               
            ],
                function (err, result) {
                    if (err) {
                        console.error(err)
                        rej(err)
                    } else {
                        console.error(result)
                        res(result)
                    }
                }
            )
    })
}