module.exports = {
  addProductCategoryQuery: (productCategoryName) =>
    `Insert into productCategory (productCategoryName) values ('${productCategoryName}')`,
  getProductCategoryQuery: (searchText) =>
    `Select * from productCategory ${
      searchText ? `where (productCategoryName LIKE '%${searchText}%')` : ""
    } ORDER BY createdDate DESC`,
  updateProductCategoryQuery: (productCategoryName, productCategoryID) =>
    `Update productCategory set productCategoryName ='${productCategoryName}'where productCategoryID = ${productCategoryID}`,
  deleteProductCategoryQuery: (productCategoryID) =>
    `Delete from productCategory where productCategoryID = ${productCategoryID}`,
  getProductQuery: (searchText) =>
    `Select product.*,CONVERT_TZ(product.createdDate,'+00:00','+12:30') createdDate,brand.brandName as brandName,productCategory.productCategoryName as productCategoryName from product 
    left join brand on brand.brandID = product.brand
    Left join productCategory on productCategory.productCategoryID = product.productCategory ${
      searchText ? `where (product.productName LIKE '%${searchText}%')` : ""
    } ORDER BY createdDate DESC`,
    deleteProductQuery: (productID) =>
    `Delete from product where productID = ${productID}`
};
