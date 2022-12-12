/**
 * @api {get} /api/v1/test 1.Test
 * @apiName Get TEST
 * @apiGroup Rgca
 *
 */


/**
 * @api {post} /api/v1/login 2.Employee Login
 * @apiVersion 1.0.0
 * @apiName employee login
 * @apiGroup Rgca
 *
 *
 * @apiParam (Request body) {string} email  employee email
 * @apiParam (Request body) {string} password employee password
 *
 */


/**
 * @api {get} /api/v1/getPermissions 3.Employee permissions
 * @apiVersion 1.0.0
 * @apiName    Employee permissions
 * @apiGroup   Rgca
 *
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {get} /api/v1/getEmployeeProjects 4.Employee Associate projects
 * @apiVersion 1.0.0
 * @apiName    Employee Associate projects
 * @apiGroup   Rgca
 *
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {post} /api/v1/addProject 5.Add Project
 * @apiVersion 1.0.0
 * @apiName    Add Project
 * @apiGroup   Rgca
 * @apiExample Example usage:
 *{
 *  "projectName": "RGCA Seabass Hatchery",
 *  "Description": "Healthy Fry/Fingerlings of Asian Seabass, free from VNN and produced from quarantined parent stock in bio-secure rearing systems is available for supply. The seeds would be supplied on first come first serve basis. Packing of seed in desired salinity/or freshwater shall be made upon request in advance",
 *  "shortID": "SBH",
 *  "mobile":9491538125,
 *  "address": {
 *    "line_1": " Koozhiyar road",
 *    "line_2": "Thoduvai Thirumullaivasal",
 *    "line_3": "Sirkali",
 *    "district": "Nagapattinam",
 *    "state": "Tamil Nadu",
 *    "country": "India",
 *    "postalCode": 609113
 *  },
 *  "bankDetails": {
 *    "bankName": "ICICI",
 *    "bankAccountNo": 23234343,
 *    "bankBranch": "Madhapur",
 *    "bankIFSC": "ICICI00087",
 *    "bankAccountType": "current"
 *  }
 *}
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {string} projectName  projectName
 * @apiParam (Request body) {string} Description  Description
 * @apiParam (Request body) {string} shortID  shortID
 * @apiParam (Request body) {Number} mobile  mobile
 * @apiParam (Request body) {string} bankDetails.bankName  bankName
 * @apiParam (Request body) {Number} bankDetails.bankAccountNo  bankAccountNo
 * @apiParam (Request body) {string} bankDetails.bankBranch  bankBranch
 * @apiParam (Request body) {string} bankDetails.bankIFSC  bankIFSC
 * @apiParam (Request body) {string} bankDetails.bankAccountType  bankAccountType
 * @apiParam (Request body) {string} address.line_1  line_1
 * @apiParam (Request body) {string} address.line_2  line_2
 * @apiParam (Request body) {string} address.line_3  line_3
 * @apiParam (Request body) {string} address.district  district
 * @apiParam (Request body) {string} address.state  state
 * @apiParam (Request body) {string} address.country  country
 * @apiParam (Request body) {Number} address.postalCode  postalCode
 */



/**
 * @api {get} /api/v1/lookup/:lookupID 11.Lookup
 * @apiVersion 1.0.0
 * @apiName    Lookup
 * @apiGroup   Rgca
 * @apiParam {int} lookupID     lookupID lookupID.
 * @apiHeader Authorization Basic Access Authentication token.
 */



/**
 * @api {post} /api/v1/addCategoryORsubCategory 7.Add Category or SubCategory
 * @apiVersion 1.0.0
 * @apiName    Add Category or SubCategory
 * @apiGroup   Rgca
 * @apiExample Example usage:
 * {
 *  "typeID":1,
 *  "categoryName":"Cate-1"
 *  "projectID":1
 *      or
 *  "categoryID":2,
 *  "subCategoryName":"suB-1"
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {Number} projectID  projectID
 * @apiParam (Request body) {Number} typeID  typeID
 * @apiParam (Request body) {string} categoryName  categoryName
 * @apiParam (Request body) {Number} categoryID  categoryID
 * @apiParam (Request body) {string} subCategoryName  subCategoryName
 */



/**
 * @api {post} /api/v1/getCategoryORsubCategory 8.Get Category or SubCategory
 * @apiVersion 1.0.0
 * @apiName    Get Category or SubCategory
 * @apiGroup   Rgca
 * @apiExample Example usage:
 * {
 *  "typeID":1,
 *  "projectID":1
 *      or
 *  "categoryID":2,
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {Number} projectID  projectID
 * @apiParam (Request body) {Number} typeID  typeID
 * @apiParam (Request body) {Number} categoryID  categoryID
 */


/**
 * @api {post} /api/v1/addItemOrMaterial 9.add Item Or Material
 * @apiVersion 1.0.0
 * @apiName    add Item Or Material
 * @apiGroup   Rgca
 * @apiExample Example usage:
 * {
 *  projectID: 1,
 *  subCategoryID: 1,
 *  name:"IPhone 7",
 *  description:"latest mobile" // optional
 *  brandOrCatalogue:"Apple" //optional
 *  uom:"PIECES"
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody{Number} projectID  projectID
 * @apiBody{Number} subCategoryID  subCategoryID
 * @apiBody{string} name  name
 * @apiBody{string} description  description
 * @apiBody{string} brandOrCatalogue  brandOrCatalogue
 * @apiBody{string} uom  uom
 */


