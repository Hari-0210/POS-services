module.exports = {
  addSalesQuery: (data) =>
`SET @count = FN_SALES_SERIAL();
Insert into salesMaster (salesMasterID, customerID, totalNoofProducts,subTotal,discount,packingCost,total) 
        values 
(@count,${data.customerID}, ${data.totalNoofProducts},'${data.subTotal}',${data.discount},${data.packingCost},'${data.total}');
${data.products
    .map((x) => {
      return `Insert into salesProducts 
  (salesMasterID, productID, productQty) 
values 
  (@count, ${x.productID}, ${x.productQty})`;
    })
    .join(";")};
`,
};
