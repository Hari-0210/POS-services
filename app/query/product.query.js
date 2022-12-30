module.exports = {
  addProductCategoryQuery: (productCategoryName, storeID) =>
    `Insert into productCategory (productCategoryName,storeID) values ('${productCategoryName}',${storeID})`,
  getProductCategoryQuery: (searchText, storeID) =>
    `Select * from productCategory ${
      searchText ? `where (productCategoryName LIKE '%${searchText}%')` : ""
    } ${
      storeID !== 0 ? `where (storeID = ${storeID})` : ""
    } ORDER BY createdDate DESC`,
  updateProductCategoryQuery: (productCategoryName, productCategoryID) =>
    `Update productCategory set productCategoryName ='${productCategoryName}'where productCategoryID = ${productCategoryID}`,
  deleteProductCategoryQuery: (productCategoryID) =>
    `Delete from productCategory where productCategoryID = ${productCategoryID}`,
  getProductQuery: (searchText, storeID) =>
    `Select product.*,CONVERT_TZ(product.createdDate,'+00:00','+12:30') createdDate,brand.brandName as brandName,productCategory.productCategoryName as productCategoryName from product 
    left join brand on brand.brandID = product.brand
    Left join productCategory on productCategory.productCategoryID = product.productCategory ${
      searchText ? `where (product.productName LIKE '%${searchText}%')` : ""
    }${
      storeID !== 0 ? `where (product.storeID = ${storeID})` : ""
    } ORDER BY createdDate DESC`,
  deleteProductQuery: (productID) =>
    `Delete from product where productID = ${productID}`,
};
