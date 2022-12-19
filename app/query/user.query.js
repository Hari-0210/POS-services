module.exports = {
    login: (userName) => `Select * from userDetails where userName = '${userName}'`,
}