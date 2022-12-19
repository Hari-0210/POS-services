module.exports = {
    login: (userName) => `Select * from userDetails where userName = '${userName}'`,
    getUserQuery: `Select * from userDetails where userName != 'admin'`
}