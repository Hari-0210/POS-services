module.exports = {
  addInvoiceQuery: (data, storeID) =>
    `SET @count = FN_INVOICE_SERIAL();
Insert into invoiceMaster (invoiceMasterID, invoiceNumber, invoiceDate,state,customerName,customerMobile,customerAddress,gst,email,totalNoofProducts,subTotal,SGST,CGST,IGST,total,storeID) values (@count,${
      data.invoiceNumber
    },"${data.invoiceDate}","${data.state}","${data.customerName}","${
      data.customerMobile
    }","${data.customerAddress}","${data.gst}","${data.email}",${
      data.totalNoofProducts
    },"${data.subTotal}",${data.SGST},${data.CGST},${data.IGST},"${
      data.total
    }",${storeID});
${data.products
  .map((x) => {
    return `Insert into invoiceProducts 
  (invoiceMasterID, productName, productQty, productCost) 
values 
  (@count,"${x.productName}", ${x.productQty},"${x.productCost}")`;
  })
  .join(";")};
`,
  getInvoiceQuery: (storeID) => ` 
  Select im.*,s.storeName,CONVERT_TZ(im.createdTime,"+00:00","+12:30") createdTime,
  (select JSON_ARRAYAGG(JSON_OBJECT("productCost",ip.productCost,"productName", ip.productName, "productQty", ip.productQty)) 
  from invoiceProducts as ip 
  where ip.invoiceMasterID = im.invoiceMasterID) as invoiceProducts
    from invoiceMaster as im  
    left join store as s on s.storeID = im.storeID ${
      storeID !== 0 ? `where (im.storeID = ${storeID})` : ""
    }
  `,
  updateInvoiceQuery: (data) =>
    `Delete from invoiceProducts where invoiceProducts.invoiceMasterID=${
      data.invoiceMasterID
    };
    Update invoiceMaster set 
    invoiceNumber =${data.invoiceNumber},
    invoiceDate =${data.invoiceDate},
    state ="${data.state}",
    customerName ="${data.customerName}",
    customerMobile ="${data.customerMobile}",
    customerAddress ="${data.customerAddress}",
    gst ="${data.gst}",
    email ="${data.email}",
    totalNoofProducts =${data.totalNoofProducts},
    subTotal ="${data.subTotal}",
    SGST =${data.SGST},
    CGST =${data.CGST},
    IGST =${data.IGST},
    total ="${data.total}"    
    where invoiceMasterID = ${data.invoiceMasterID};
    ${data.products
      .map((x) => {
        return `Insert into invoiceProducts 
        (invoiceMasterID, productName, productQty, productCost) 
      values 
        (${data.invoiceMasterID}, "${x.productName}", ${x.productQty},"${x.productCost}")`;
      })
      .join(";")};
    `,
  deleteInvoiceQuery: (
    invoiceMasterID
  ) => `Delete from invoiceMaster where invoiceMaster.invoiceMasterID=${invoiceMasterID};
      Delete from invoiceProducts where invoiceProducts.invoiceMasterID=${invoiceMasterID}`,
};
