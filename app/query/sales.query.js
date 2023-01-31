module.exports = {
  addSalesQuery: (data, storeID) =>
    `SET @count = FN_SALES_SERIAL();
Insert into salesMaster (salesMasterID, customerID, totalNoofProducts,subTotal,discount,packingCost,total,storeID) 
        values 
(@count,${data.customerID}, ${data.totalNoofProducts},'${data.subTotal}',${
      data.discount
    },${data.packingCost},'${data.total}',${storeID});
${data.products
  .map((x) => {
    return `Insert into salesProducts 
  (salesMasterID, productName, productQty, productCost) 
values 
  (@count, '${x.productName}', ${x.productQty},'${x.productCost}')`;
  })
  .join(";")};
`,

  getSalesQuery: (
    storeID
  ) => ` 
  Select sm.*,s.storeName, c.name as customerName,CONVERT_TZ(sm.createdTime,'+00:00','+12:30') createdTime,
  (select JSON_ARRAYAGG(JSON_OBJECT('productCost',sp.productCost,'productName', sp.productName, 'productQty', sp.productQty)) 
  from salesProducts as sp 
  where sp.salesMasterID = sm.salesMasterID) as salesProducts
    from salesMaster as sm  
    left join customer as c on c.customerID = sm.customerID
    left join store as s on s.storeID = sm.storeID ${
      storeID !== 0 ? `where (sm.storeID = ${storeID})` : ""
    }
  `,
  updateSalesQuery: (data) =>
    `Update salesMaster set (customerID =${
      data.customerID
    },totalNoofProducts =${data.totalNoofProducts},subTotal ='${
      data.subTotal
    }',discount =${data.discount},packingCost =${data.packingCost},total ='${
      data.total
    }') where salesMasterID = ${data.salesMasterID};
    ${data.products
      .map((x) => {
        return `Update  salesProducts set
      (productID =${productID}, productQty =${productQty}) 
      where salesMasterID = ${salesMasterID} and salesProductID = ${salesProductID}`;
      })
      .join(";")};
    `,
  deleteSalesQuery: (
    salesMasterID
  ) => `Delete from salesMaster where salesMaster.salesMasterID=${salesMasterID};
  Delete from salesProducts where salesProducts.salesMasterID=${salesMasterID}`,
};
