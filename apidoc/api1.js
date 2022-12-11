// -------------------------------
//             Vendor
// -------------------------------
// Add
/**
 * @api {post} /api/v1/addVendor 1. Add vendor
 * @apiVersion 1.0.0
 * @apiName    Add vendor
 * @apiGroup   Rgca-vendor
 * @apiExample Example usage:
 *  {
 *      "name": "Mathan",
 *      "companyType": 1,
 *      "companyName": "Mathan MNC company",
 *      "gstn": "123456ABCDEF789",
 *      "gstnAttach": "filename.jpg" // optional
 *      "pan": "12345UDYHD",
 *      "panAttach": "filename.jpg" // optional
 *      "aadhar": "123456781234",
 *      "aadharAttach": "filename.jpg" // optional
 *      "email": "sgdhsgh@gmail.com",
 *      "mobile": "9865329865",
 *      "address": {
 *          "line_1": "10a",
 *          "line_2": "New gardon street" // optional
 *          "line_3": "East Gate" // optional
 *          "district": "Madurai",
 *          "state": "Tamilnadu",
 *          "country": "India",
 *          "postalCode": 625001
 *      },
 *      "bankDetails":{
 *          "bankName": "ICICI bank",
 *          "bankAccountNo": "3528578954221",
 *          "bankBranch": "Southgate",
 *          "bankIFSC": "ICIC00552655",
 *          "bankAccountType": "Savings",
 *          "bankAccountHolderName": "Mathan"
 *          "cancelChequeAttach": "chequeFile.jpg" // optional
 *      }
 *  }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {String} name name
 * @apiBody {Number} companyType  companyType
 * @apiBody {String} companyName  companyName
 * @apiBody {String} gstn gstn
 * @apiBody {String} [gstnAttach] gstnAttach
 * @apiBody {String} pan pan
 * @apiBody {String} [panAttach] panAttach
 * @apiBody {String} aadhar aadhar
 * @apiBody {String} [aadharAttach] aadharAttach
 * @apiBody {String} email email
 * @apiBody {Number} mobile mobile
 * @apiBody {String} address.line_1  line_1
 * @apiBody {String} [address.line_2]  line_2
 * @apiBody {String} [address.line_3]  line_3
 * @apiBody {String} address.district  district
 * @apiBody {String} address.state  state
 * @apiBody {String} address.country  country
 * @apiBody {Number} address.postalCode  postalCode
 * @apiBody {String} bankDetails.bankName  bankName
 * @apiBody {String} bankDetails.bankAccountNo  bankAccountNo
 * @apiBody {String} bankDetails.bankBranch  bankBranch
 * @apiBody {String} bankDetails.bankIFSC  bankIFSC
 * @apiBody {String} bankDetails.bankAccountType  bankAccountType
 * @apiBody {String} bankDetails.bankAccountHolderName  bankAccountHolderName
 * @apiBody {String} [bankDetails.cancelChequeAttach]  cancelChequeAttach
 */

// Update
/**
 * @api {put} /api/v1/updateVendor 2. Update vendor
 * @apiVersion 1.0.0
 * @apiName    Update vendor
 * @apiGroup   Rgca-vendor
 * @apiExample Example usage:
 *  {
 *      "vendorID": "4",
 *      "name": "Mathan",
 *      "companyType": 1,
 *      "companyName": "Mathan MNC company",
 *      "gstn": "123456ABCDEF789",
 *      "gstnAttach": "filename.jpg" // optional
 *      "pan": "12345UDYHD",
 *      "panAttach": "filename.jpg" // optional
 *      "aadhar": "123456781234",
 *      "aadharAttach": "filename.jpg" // optional
 *      "email": "sgdhsgh@gmail.com",
 *      "mobile": "9865329865",
 *      "address": {
 *          "line_1": "10a",
 *          "line_2": "New gardon street" // optional
 *          "line_3": "East Gate" // optional
 *          "district": "Madurai",
 *          "state": "Tamilnadu",
 *          "country": "India",
 *          "postalCode": 625001
 *      },
 *      "bankDetails":{
 *          "bankName": "ICICI bank",
 *          "bankAccountNo": "3528578954221",
 *          "bankBranch": "Southgate",
 *          "bankIFSC": "ICIC00552655",
 *          "bankAccountType": "Savings",
 *          "bankAccountHolderName": "Mathan"
 *          "cancelChequeAttach": "chequeFile.jpg" // optional
 *      }
 *  }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} vendorID vendorID
 * @apiBody {String} name name
 * @apiBody {Number} companyType  companyType
 * @apiBody {String} companyName  companyName
 * @apiBody {String} gstn gstn
 * @apiBody {String} [gstnAttach] gstnAttach
 * @apiBody {String} pan pan
 * @apiBody {String} [panAttach] panAttach
 * @apiBody {String} aadhar aadhar
 * @apiBody {String} [aadharAttach] aadharAttach
 * @apiBody {String} email email
 * @apiBody {Number} mobile mobile
 * @apiBody {String} address.line_1  line_1
 * @apiBody {String} [address.line_2]  line_2
 * @apiBody {String} [address.line_3]  line_3
 * @apiBody {String} address.district  district
 * @apiBody {String} address.state  state
 * @apiBody {String} address.country  country
 * @apiBody {Number} address.postalCode  postalCode
 * @apiBody {String} bankDetails.bankName  bankName
 * @apiBody {String} bankDetails.bankAccountNo  bankAccountNo
 * @apiBody {String} bankDetails.bankBranch  bankBranch
 * @apiBody {String} bankDetails.bankIFSC  bankIFSC
 * @apiBody {String} bankDetails.bankAccountType  bankAccountType
 * @apiBody {String} bankDetails.bankAccountHolderName  bankAccountHolderName
 * @apiBody {String} [bankDetails.cancelChequeAttach]  cancelChequeAttach
 */


// list
/**
 * @api {get} /api/v1/listVendor 3. Get vendor list
 * @apiVersion 1.0.0
 * @apiName    Get Vendor
 * @apiGroup   Rgca-vendor
 * @apiHeader Authorization Basic Access Authentication token.
 */


// Get single
/**
 * @api {get} /api/v1/getVendorDetails/:vendorID 4. Get single vendor details
 * @apiVersion 1.0.0
 * @apiName    Get signle vendor details
 * @apiGroup   Rgca-vendor
 * @apiParam   {int} vendorID     vendorID vendorID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


// Delete
/**
 * @api {delete} /api/v1/deleteVendor/:vendorID 5. Delete vendor
 * @apiVersion 1.0.0
 * @apiName    Delete vendor
 * @apiGroup   Rgca-vendor
 * @apiParam   {int} vendorID     vendorID vendorID.
 * @apiHeader Authorization Basic Access Authentication token.
 */

// -------------------------------
//             Sales Management
// -------------------------------
// Add category
/**
 * @api {post} /api/v1/addSalesCategory 1. Add sales category
 * @apiVersion 1.0.0
 * @apiName    Add sales category
 * @apiGroup   Rgca-sales-management
 * @apiExample Example usage:
 *  {
 *      "typeID": 17,
 *      "projectID": 1,
 *      "name": "Car",
 *      "description": "Buy a car", // optional
 *  }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} typeID typeID
 * @apiBody {Number} projectID  projectID
 * @apiBody {String} name  name
 * @apiBody {String} [description] description
 */

// list category
/**
 * @api {post} /api/v1/getSalesCategory 2. Get sales category list
 * @apiVersion 1.0.0
 * @apiName    Get sales category list
 * @apiGroup   Rgca-sales-management
 * @apiExample Example usage:
 *  {
 *      "typeID": 17,
 *      "projectID": 1
 *  }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiBody {Number} typeID typeID
 * @apiBody {Number} projectID  projectID
 */

// Add item
/**
 * @api {post} /api/v1/addSalesItem 3. Add sales item
 * @apiVersion 1.0.0
 * @apiName    Add sales item
 * @apiGroup   Rgca-sales-management
 * @apiExample Example usage:
 *  {
 *      "typeID": 17,
 *      "categoryID": 1,
 *      "name": "bke",
 *      "hssn": "1211",
 *      "uom": "Pieces",
 *      "rpu": 15,
 *      "gstTaxability": true,
 *      "rca": true,
 *      "gstRate": "20",
 *      "description": "Buy a car", // optional
 *      "stock": 5,
 *  }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} typeID typeID
 * @apiBody {Number} projectID  projectID
 * @apiBody {String} name  name
 * @apiBody {String} hssn  hssn
 * @apiBody {String} uom  uom
 * @apiBody {Number} rpu  rpu
 * @apiBody {Boolean} gstTaxability  gstTaxability
 * @apiBody {Boolean} rca  rca
 * @apiBody {String} gstRate  gstRate
 * @apiBody {String} [description] description
 * @apiBody {Number} stock  stock
 */

// list item
/**
 * @api {get} /api/v1/listSalesItem 4. Get sales item list
 * @apiVersion 1.0.0
 * @apiName    Get sales item list
 * @apiGroup   Rgca-sales-management
 * @apiHeader Authorization Basic Access Authentication token.
 */

// update item
/**
 * @api {put} /api/v1/updateSalesItem 5. Update sales item
 * @apiVersion 1.0.0
 * @apiName    Update sales item
 * @apiGroup   Rgca-sales-management
 * @apiExample Example usage:
 *  {
 *      "itemID": 4,
 *      "typeID": 17,
 *      "categoryID": 1,
 *      "name": "bke",
 *      "hssn": "1211",
 *      "uom": "Pieces",
 *      "rpu": 15,
 *      "gstTaxability": true,
 *      "rca": true,
 *      "gstRate": "20",
 *      "description": "Buy a car", // optional
 *      "stock": 5,
 *  }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} itemID itemID
 * @apiBody {Number} typeID typeID
 * @apiBody {Number} projectID  projectID
 * @apiBody {String} name  name
 * @apiBody {String} hssn  hssn
 * @apiBody {String} uom  uom
 * @apiBody {Number} rpu  rpu
 * @apiBody {Boolean} gstTaxability  gstTaxability
 * @apiBody {Boolean} rca  rca
 * @apiBody {String} gstRate  gstRate
 * @apiBody {String} [description] description
 * @apiBody {Number} stock  stock
 */

// Delete
/**
 * @api {delete} /api/v1/deleteSalesItem/:itemID 6. Delete sales item
 * @apiVersion 1.0.0
 * @apiName    Delete sales item
 * @apiGroup   Rgca-sales-management
 * @apiParam   {int} itemID  itemID itemID.
 * @apiHeader Authorization Basic Access Authentication token.
 */



// -------------------------------
//             Customer
// -------------------------------
// Add
/**
 * @api {post} /api/v1/addCustomer 1. Add customer
 * @apiVersion 1.0.0
 * @apiName    Add customer
 * @apiGroup   Rgca-customer
 * @apiExample Example usage:
 *  {
 *      "projectID": 1,
 *      "name": "Mathan",
 *      "companyType": 1, // optional
 *      "companyName": "Mathan MNC company", // optional
 *      "gstn": "123456ABCDEF789", // optional //length 15
 *      "gstnAttach": "filename.jpg" // optional
 *      "pan": "12345UDYHD", // length 10
 *      "panAttach": "filename.jpg" // optional
 *      "aadhar": "123456781234", // length 12
 *      "aadharAttach": "filename.jpg" // optional
 *      "email": "sgdhsgh@gmail.com", // unique key
 *      "mobile": "9865329865", // length 10
 *      "address": {
 *          "line_1": "10a",
 *          "line_2": "New gardon street" // optional
 *          "line_3": "East Gate" // optional
 *          "district": "Madurai",
 *          "state": "Tamilnadu",
 *          "country": "India",
 *          "postalCode": 625001
 *      }
 *  }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} projectID  projectID
 * @apiBody {String} name name
 * @apiBody {Number} [companyType]  companyType
 * @apiBody {String} [companyName]  companyName
 * @apiBody {String} [gstn] gstn
 * @apiBody {String} [gstnAttach] gstnAttach
 * @apiBody {String} pan pan
 * @apiBody {String} [panAttach] panAttach
 * @apiBody {String} aadhar aadhar
 * @apiBody {String} [aadharAttach] aadharAttach
 * @apiBody {String} email email
 * @apiBody {Number} mobile mobile
 * @apiBody {String} address.line_1  line_1
 * @apiBody {String} [address.line_2]  line_2
 * @apiBody {String} [address.line_3]  line_3
 * @apiBody {String} address.district  district
 * @apiBody {String} address.state  state
 * @apiBody {String} address.country  country
 * @apiBody {Number} address.postalCode  postalCode
 */

// Update
/**
 * @api {put} /api/v1/updateCustomer 2. Update customer
 * @apiVersion 1.0.0
 * @apiName    Update customer
 * @apiGroup   Rgca-customer
 * @apiExample Example usage:
 *  {
 *      "customerID": "1",
 *      "name": "Mathan",
 *      "companyType": 1, // optional
 *      "companyName": "Mathan MNC company", // optional
 *      "gstn": "123456ABCDEF789", // optional
 *      "gstnAttach": "filename.jpg" // optional
 *      "pan": "12345UDYHD",
 *      "panAttach": "filename.jpg" // optional
 *      "aadhar": "123456781234",
 *      "aadharAttach": "filename.jpg" // optional
 *      "email": "sgdhsgh@gmail.com",
 *      "mobile": "9865329865",
 *      "address": {
 *          "line_1": "10a",
 *          "line_2": "New gardon street" // optional
 *          "line_3": "East Gate" // optional
 *          "district": "Madurai",
 *          "state": "Tamilnadu",
 *          "country": "India",
 *          "postalCode": 625001
 *      }
 *  }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} customerID customerID
 * @apiBody {String} name name
 * @apiBody {Number} [companyType]  companyType
 * @apiBody {String} [companyName]  companyName
 * @apiBody {String} [gstn] gstn
 * @apiBody {String} [gstnAttach] gstnAttach
 * @apiBody {String} pan pan
 * @apiBody {String} [panAttach] panAttach
 * @apiBody {String} aadhar aadhar
 * @apiBody {String} [aadharAttach] aadharAttach
 * @apiBody {String} email email
 * @apiBody {Number} mobile mobile
 * @apiBody {String} address.line_1  line_1
 * @apiBody {String} [address.line_2]  line_2
 * @apiBody {String} [address.line_3]  line_3
 * @apiBody {String} address.district  district
 * @apiBody {String} address.state  state
 * @apiBody {String} address.country  country
 * @apiBody {Number} address.postalCode  postalCode
 */


// list
/**
 * @api {post} /api/v1/listCustomer 3. Get customer list
 * @apiVersion 1.0.0
 * @apiName    Get customer
 * @apiGroup   Rgca-customer
 * @apiExample Example usage:
 *  {
 *      "projectID": "1",
 *      "searchText": "example text" // optional
 *  }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiBody {Number} projectID projectID
 * @apiBody {String} searchText searchText (name, email) field
 */


// Get single
/**
 * @api {get} /api/v1/getCustomerDetails/:customerID 4. Get single customer details
 * @apiVersion 1.0.0
 * @apiName    Get signle customer details
 * @apiGroup   Rgca-customer
 * @apiParam   {int} customerID customerID customerID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


// Delete
/**
 * @api {delete} /api/v1/deleteCustomer/:customerID 5. Delete customer
 * @apiVersion 1.0.0
 * @apiName    Delete customer
 * @apiGroup   Rgca-customer
 * @apiParam   {int} customerID customerID customerID.
 * @apiHeader Authorization Basic Access Authentication token.
 */

//---------------------------------------------
// work order crud                             |
//----------------------------------------------
// add
/**
 * @api {post} /api/v1/addWorkOrder 1. Add WorkOrder
 * @apiVersion 1.0.0
 * @apiName    Add Work Order
 * @apiGroup   Rgca-workorder
 * @apiExample Example usage:
 * {
 *     "projectID": 1,
 *     "name": "Admin new",
 *     "email": "sghhbhvgn1@gmail.com",
 *     "mobile": "9865329864",
 *     "description": "Mathan MNC company", // optional
 *     "noe": 2,
 *     "materialItem": 1,
 *     "dsa": "file1.jpg",
 *     "tcv": 15420,
 *     "taxDetails": "sdfdsf",
 *     "paymentTerms": "sdsf", // optional
 *     "otherConditions": "sdsf", // optional
 *     "address": {
 *         "line_1": "sdfdff",
 *         "line_2": "sdfdff", // optional
 *         "line_3": "sdfdff", // optional
 *         "district": "Madurai",
 *         "state": "Tamilnadu",
 *         "country": "India",
 *         "postalCode": 625001
 *     }
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} projectID  projectID
 * @apiBody {String} name name
 * @apiBody {String} email email
 * @apiBody {String} mobile mobile
 * @apiBody {String} [description]  description
 * @apiBody {Number} noe  Nature of Expenditure (TypeID - loookup data)
 * @apiBody {Number} materialItem Material item itemID
 * @apiBody {String} dsa Detailed Specification Attachment
 * @apiBody {Number} tcv Total Contract Value
 * @apiBody {String} taxDetails taxDetails
 * @apiBody {String} [paymentTerms] paymentTerms
 * @apiBody {String} [otherConditions] otherConditions
 * @apiBody {String} address.line_1  line_1
 * @apiBody {String} [address.line_2]  line_2
 * @apiBody {String} [address.line_3]  line_3
 * @apiBody {String} address.district  district
 * @apiBody {String} address.state  state
 * @apiBody {String} address.country  country
 * @apiBody {Number} address.postalCode  postalCode
 */

//update
/**
 * @api {put} /api/v1/updateWorkOrder  2. Update WorkOrder
 * @apiVersion 1.0.0
 * @apiName Update workorder
 * @apiGroup Rgca-workorder
 * @apiExample Example usage:
 * {
 *     "projectID": 1,
 *     "name": "Admin new",
 *     "email": "sghhbhvgn1@gmail.com",
 *     "mobile": "9865329864",
 *     "description": "Mathan MNC company", // optional
 *     "noe": 2,
 *     "materialItem": 1,
 *     "dsa": "file1.jpg",
 *     "tcv": 15420,
 *     "taxDetails": "sdfdsf",
 *     "paymentTerms": "sdsf", // optional
 *     "otherConditions": "sdsf", // optional
 *     "address": {
 *         "line_1": "sdfdff",
 *         "line_2": "sdfdff", // optional
 *         "line_3": "sdfdff", // optional
 *         "district": "Madurai",
 *         "state": "Tamilnadu",
 *         "country": "India",
 *         "postalCode": 625001
 *     }
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} projectID  projectID
 * @apiBody {String} name name
 * @apiBody {String} email email
 * @apiBody {String} mobile mobile
 * @apiBody {String} [description]  description
 * @apiBody {Number} noe  Nature of Expenditure (TypeID - loookup data)
 * @apiBody {Number} materialItem Material item itemID
 * @apiBody {String} dsa Detailed Specification Attachment
 * @apiBody {Number} tcv Total Contract Value
 * @apiBody {String} taxDetails taxDetails
 * @apiBody {String} [paymentTerms] paymentTerms
 * @apiBody {String} [otherConditions] otherConditions
 * @apiBody {String} address.line_1  line_1
 * @apiBody {String} [address.line_2]  line_2
 * @apiBody {String} [address.line_3]  line_3
 * @apiBody {String} address.district  district
 * @apiBody {String} address.state  state
 * @apiBody {String} address.country  country
 * @apiBody {Number} address.postalCode  postalCode
 */

// list
/**
 * @api {post} /api/v1/listworkOrder 3. Get WorkOrder list
 * @apiVersion 1.0.0
 * @apiName    Get workorder
 * @apiGroup   Rgca-workorder
 * @apiExample Example usage:
 *  {
 *      "projectID": "1",
 *      "searchText": "example text" // optional
 *  }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiBody {Number} projectID projectID
 * @apiBody {String} searchText searchText (name, email) field
 */

// Delete
/**
 * @api {delete} /api/v1/deleteworkOrder/:WorkOrderID 4. Delete workorder
 * @apiVersion 1.0.0
 * @apiName    Delete workorder
 * @apiGroup   Rgca-workorder
 * @apiParam   {int} WorkOrderID WorkOrderID WorkOrderID.
 * @apiHeader Authorization Basic Access Authentication token.
 */

// Get single workorder approval list 
/**
 * @api {get} /api/v1/getWorkOrderApprovalList/:projectID 5. Get work order approval single
 * @apiVersion 1.0.0
 * @apiName    Get work order approval single
 * @apiGroup   Rgca-workorder
 * @apiParam   {int} projectID projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */

// Update WorkOrder Approval 
/**
 * @api {post} /api/v1/updateWorkOrderApproval 6. Update Workorder Approval
 * @apiVersion 1.0.0
 * @apiName    Update Workorder Approval
 * @apiGroup   Rgca-workorder
 * @apiExample Example usage:
 * {
 *    "statusID":24,
 *    "workOrderMasterID": "SBH-WORKORDER-3",
 *    "comment":"Success",
 *    "referOption":false,
 *    "refer":false
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiBody {Number} statusID statusID
 * @apiBody {String} workOrderMasterID workOrderMasterID
 * @apiBody {String} comment comment
 * @apiBody {Boolean} referOption referOption
 * @apiBody {Boolean} refer refer
 */

// Get Workorder All Approved List 
/**
 * @api {get} /api/v1/getWorkOrderAllApprovedList/:projectID 7. Get indent all person approved for display purchase order
 * @apiVersion 1.0.0
 * @apiName    Get indent all person approved for display purchase order
 * @apiGroup   Rgca-workorder
 * @apiParam   {int} projectID projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */

//---------------------------------------------
// purchase order crud                         |
//----------------------------------------------

// add
/**
 * @api {post} /api/v1/addPurchaseOrderForIndent 1. Generate purchase order
 * @apiVersion 1.0.0
 * @apiName    Generate purchase order
 * @apiGroup   Rgca-purchase-order
 * @apiExample Example usage:
 * {
 *   "projectID":1,
 *   "vendorID": 1,
 *   "indentMasterID": "SBHQQ-INDENT-20",
 *   "stateType": "intrastate",
 *   "totalQty": 12,
 *   "totalValue": 11000,
 *   "items":[
 *      {
 *         "materialItem":1,
 *         "description": "sgdf",
 *         "isGST": false,
 *         "unitPrice": 5000,
 *         "qty": 5
 *      },
 *      {
 *         "materialItem":2,
 *         "description": "sgdf",
 *         "isGST": true,
 *         "SGST": 12.5,
 *         "CGST": 12.5,
 *         "IGST": 0,
 *         "UGST": 0,
 *         "unitPrice": 6000,
 *         "qty": 7
 *      }
 *   ]
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} projectID  projectID
 * @apiBody {Number} vendorID  vendorID
 * @apiBody {String} indentMasterID indentMasterID
 * @apiBody {String} stateType stateType
 * @apiBody {Number} totalQty totalQty
 * @apiBody {Number} totalValue  totalValue
 * @apiBody {Number} items.materialItem  materialItem.
 * @apiBody {String} items.description  description.
 * @apiBody {Boolean} items.isGST  isGST.
 * @apiBody {Number} items.SGST  SGST.
 * @apiBody {Number} items.CGST  CGST.
 * @apiBody {Number} items.IGST  IGST.
 * @apiBody {Number} items.UGST  UGST.
 * @apiBody {String} items.unitPrice  unitPrice.
 */

// Update purchase order approval 
/**
 * @api {post} /api/v1/updateApprovalForPurchaseOrder 3. Update purchase order approval
 * @apiVersion 1.0.0
 * @apiName    Update purchase order approval
 * @apiGroup   Rgca-purchase-order
 * @apiExample Example usage:
 * {
 *    "statusID":24,
 *    "purchaseOrderMasterID": "SBH-PO-1",
 *    "comment":"Success",
 *    "referOption":false,
 *    "refer":false
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiBody {Number} statusID statusID
 * @apiBody {String} purchaseOrderMasterID purchaseOrderMasterID
 * @apiBody {String} comment comment
 * @apiBody {Boolean} referOption referOption
 * @apiBody {Boolean} refer refer
 */

//----------------------------------------------
// GRN crud                                    |
//----------------------------------------------

// Get purchase order for GRN
/**
 * @api {post} /api/v1/getPurchaseOrderForGRN 1. Get purchase order for GRN
 * @apiVersion 1.0.0
 * @apiName    Get purchase order for GRN
 * @apiGroup   Rgca-GRN
 * @apiExample Example usage:
 * {
 *    "projectID": 1,
 *    "purchaseOrderMasterID": "SBHpp-PO-4"
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiBody {Number} projectID projectID
 * @apiBody {String} purchaseOrderMasterID purchaseOrderMasterID
 */