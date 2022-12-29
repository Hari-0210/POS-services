module.exports = {
  addSalesQuery: (data) =>
    `SET @count = FN_SALES_SERIAL();
Insert into salesMaster (salesMasterID, customerID, totalNoofProducts,subTotal,discount,packingCost,total) 
        values 
(@count,${data.customerID}, ${data.totalNoofProducts},'${data.subTotal}',${
      data.discount
    },${data.packingCost},'${data.total}');
${data.products
  .map((x) => {
    return `Insert into salesProducts 
  (salesMasterID, productID, productQty) 
values 
  (@count, ${x.productID}, ${x.productQty})`;
  })
  .join(";")};
`,

  getSalesQuery: `Select sm.*, c.name as customerName,CONVERT_TZ(sm.createdTime,'+00:00','+12:30') createdTime,
  (select JSON_ARRAYAGG(JSON_OBJECT('productID',sp.productID,'productName', p.productName, 'productQty', sp.productQty)) 
  from salesProducts as sp 
  INNER JOIN product as p on p.productID = sp.productID
  where sp.salesMasterID = sm.salesMasterID) as salesProducts
    from salesMaster as sm left join customer as c on c.customerID = sm.customerID
  `,

  deleteSalesQuery: (
    salesMasterID
  ) => `Delete from salesMaster where salesMaster.salesMasterID=${salesMasterID};
  Delete from salesProducts where salesProducts.salesMasterID=${salesMasterID}`,
};
