module.exports = {
  addStoreQuery: (storeName, isActive) =>
    `Insert into store (storeName, isActive) values ('${storeName}', ${isActive})`,
  getStoreQuery: (searchText) =>
    `Select * from store ${
      searchText ? `where (storeName LIKE '%${searchText}%')` : ""
    } ORDER BY createdDate DESC`,
  updateStoreQuery: (storeName,isActive, storeID) =>
    `Update store set storeName ='${storeName}', isActive = ${isActive} where storeID = ${storeID}`,
  deleteStoreQuery: (storeID) =>
    `Delete from store where store.storeID = ${storeID}`,
};
