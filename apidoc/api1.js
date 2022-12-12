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

