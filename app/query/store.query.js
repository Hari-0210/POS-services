module.exports = {
  addStoreQuery: (storeName) =>
    `Insert into store (storeName) values ('${storeName}')`,
  getStoreQuery: (searchText) =>
    `Select * from store ${
      searchText ? `where (storeName LIKE '%${searchText}%')` : ""
    } ORDER BY createdDate DESC`,
  updateStoreQuery: (storeName, storeID) =>
    `Update store set storeName ='${storeName}'where storeID = ${storeID}`,
  deleteStoreQuery: (storeID) =>
    `Delete from store where store.storeID = ${storeID}`,
};
