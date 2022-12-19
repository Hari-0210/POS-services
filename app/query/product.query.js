module.exports = {
    addProductCategoryQuery: (productCategoryName) => `Insert into productCategory (productCategoryName) values ('${productCategoryName}')`,
    getProductCategoryQuery: `Select * from productCategory`,
    updateProductCategoryQuery: (productCategoryName, productCategoryID) => `Update productCategory set productCategoryName ='${productCategoryName}'where productCategoryID = ${productCategoryID}`,
    deleteProductCategoryQuery:(productCategoryID)=>`Delete from productCategory where productCategoryID = ${productCategoryID}`
}