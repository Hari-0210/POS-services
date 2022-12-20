module.exports = {
  addBrandQuery: (brandName) =>
    `Insert into brand (brandName) values ('${brandName}')`,
  getBrandQuery: `Select * from brand`,
  updateBrandQuery: (brandName, brandID) =>
    `Update brand set brandName ='${brandName}'where brandID = ${brandID}`,
  deleteBrandQuery: (brandID) => `Delete from brand where brandID = ${brandID}`,
};
