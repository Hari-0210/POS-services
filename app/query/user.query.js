module.exports = {
    login: (userName) => `Select * from userDetails where userName = '${userName}'`,
    getUserQuery:(storeID) => `Select userDetails.*, store.* from userDetails 
    left join store on store.storeID = userDetails.storeID where userName != 'admin'`
}