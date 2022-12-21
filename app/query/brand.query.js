module.exports = {
  addBrandQuery: (brandName) =>
    `Insert into brand (brandName) values ('${brandName}')`,
  getBrandQuery: (searchText) =>
    `Select * from brand ${
      searchText ? `where (brandName LIKE '%${searchText}%')` : ""
    }`,
  updateBrandQuery: (brandName, brandID) =>
    `Update brand set brandName ='${brandName}'where brandID = ${brandID}`,
  
};
