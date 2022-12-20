module.exports = {
    addProductCategoryQuery: (productCategoryName) => `Insert into productCategory (productCategoryName) values ('${productCategoryName}')`,
    getProductCategoryQuery: (searchText) => `Select * from productCategory ${searchText ? `where (productCategoryName LIKE '%${searchText}%')` : ''} ORDER BY createdDate DESC`,
    updateProductCategoryQuery: (productCategoryName, productCategoryID) => `Update productCategory set productCategoryName ='${productCategoryName}'where productCategoryID = ${productCategoryID}`,
    deleteProductCategoryQuery:(productCategoryID)=>`Delete from productCategory where productCategoryID = ${productCategoryID}`
}