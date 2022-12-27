module.exports = {
  addSalesQuery: (data) =>
    `        
  SET @salesMasterID  = FN_SALES_SERIAL();

  insert into salesMaster (salesMasterID, customerID, totalNoofProducts,subTotal,discount,packingCost,total) 
        values 
            (@salesMasterID,   ${data.customerID}, ${data.totalNoofProducts},'${
      data.subTotal
    }',${data.discount},${data.packingCost},'${data.total}' );

  ${data.products
    .map((x) => {
      return `insert into salesProducts 
  (salesMasterID, productID, productQty) 
values 
  (@salesMasterID,   ${x.productID}, ${x.productQty} )`;
    })
    .join(";")}
`,
};
