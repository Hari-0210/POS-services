module.exports = {
  addDummySalesQuery: (data, storeID) =>
    `SET @count = FN_DUMMYSALES_SERIAL();
  Insert into dummySalesMaster (dummySalesMasterID,estimateNum, customerID, totalNoofProducts,subTotal,discount,packingCost,total,storeID) 
          values 
  (@count,${data.estimateNum},${data.customerID}, ${data.totalNoofProducts},'${
      data.subTotal
    }',${data.discount},${data.packingCost},'${data.total}',${storeID});
  ${data.products
    .map((x) => {
      return `Insert into dummySalesProducts 
    (dummySalesMasterID, productCode, productQty,productName,productCost) 
  values 
    (@count, ${x.productCode}, ${x.productQty}, '${x.productName}',${x.productCost})`;
    })
    .join(";")};
  `,
  getDummySalesQuery: (
    storeID
  ) => `Select sm.*,s.storeName, c.name as customerName,CONVERT_TZ(sm.createdTime,'+00:00','+12:30') createdTime,
  (select JSON_ARRAYAGG(JSON_OBJECT('productID',sp.dummySalesProductID,'productName', sp.productName, 'productQty', sp.productQty, 'productCode', sp.productCode, 'productCost', sp.productCost)) 
  from dummySalesProducts as sp 
  where sp.dummySalesMasterID = sm.dummySalesMasterID) as salesProducts
    from dummySalesMaster as sm  
    left join customer as c on c.customerID = sm.customerID
    left join store as s on s.storeID = sm.storeID ${
      storeID !== 0 ? `where (sm.storeID = ${storeID})` : ""
    }
  `,
  dummyDeleteSalesQuery: (
    dummySalesMasterID
  ) => `Delete from dummySalesMaster where dummySalesMaster.dummySalesMasterID=${dummySalesMasterID};
  Delete from dummySalesProducts where dummySalesProducts.dummySalesMasterID=${dummySalesMasterID}`,
};
