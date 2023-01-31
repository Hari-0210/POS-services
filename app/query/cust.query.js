module.exports = {
  getCustomer:(storeID) => `Select * from customer ${
    storeID !== 0 ? `where (storeID = ${storeID})` : ""
  }`,
  deleteCustomerQuery: (customerID) =>
    `Delete from customer where customerID = ${customerID}`
};
