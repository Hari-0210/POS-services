module.exports = {
  getCustomer:(storeID) => `Select * from customer ${
    storeID !== 0 ? `where (storeID = ${storeID})` : ""
  }`,
};
