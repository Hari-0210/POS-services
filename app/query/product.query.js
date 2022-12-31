module.exports = {
  addProductCategoryQuery: (productCategoryName, storeID) =>
    `Insert into productCategory (productCategoryName,storeID) values ('${productCategoryName}',${storeID})`,
  getProductCategoryQuery: (searchText, storeID) =>
    `Select productCategory.*, store.storeName from productCategory 
    left join store on store.storeID = productCategory.storeID ${
      storeID !== 0 && searchText
        ? `where (storeID = ${storeID}) and (productCategoryName LIKE '%${searchText}%')`
        : searchText
        ? `where (productCategoryName LIKE '%${searchText}%')`
        : storeID !== 0
        ? `where (storeID = ${storeID})`
        : ""
    }ORDER BY createdDate DESC`,
  updateProductCategoryQuery: (productCategoryName, productCategoryID) =>
    `Update productCategory set productCategoryName ='${productCategoryName}'where productCategoryID = ${productCategoryID}`,
  deleteProductCategoryQuery: (productCategoryID) =>
    `Delete from productCategory where productCategoryID = ${productCategoryID}`,
  getProductQuery: (searchText, storeID) =>
    `Select product.*,store.storeName,CONVERT_TZ(product.createdDate,'+00:00','+12:30') createdDate,brand.brandName as brandName,productCategory.productCategoryName as productCategoryName from product 
    left join brand on brand.brandID = product.brand
    Left join productCategory on productCategory.productCategoryID = product.productCategory
    left join store on store.storeID = product.storeID
    ${
      storeID !== 0 && searchText
        ? `where (product.storeID = ${storeID}) and (product.productName LIKE '%${searchText}%')`
        : searchText
        ? `where (product.productName LIKE '%${searchText}%')`
        : storeID !== 0
        ? `where (product.storeID = ${storeID})`
        : ""
    } ORDER BY createdDate DESC`,
  deleteProductQuery: (productID) =>
    `Delete from product where productID = ${productID}`,
    getProductByCategoryQuery: (productCategoryID) => `Select * from product where productCategory = ${productCategoryID}`
};
