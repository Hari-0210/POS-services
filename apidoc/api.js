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



/**
 * @api {get} /api/v1/getItems/:projectID 10.getItems
 * @apiVersion 1.0.0
 * @apiName    getItems
 * @apiGroup   Rgca
 * @apiParam {int} projectID     projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {post} /api/v1/addDesignation 1.Add Designation
 * @apiVersion 1.0.0
 * @apiName    Add Designation
 * @apiGroup   Rgca-designation
 * @apiExample Example usage:
 * {
 *  "name":"HR",
 *  "fullName":"Human Resources" //optional
 *  "comment":"HR managers have a more hands-on role and are responsible for the day-to-day planning and execution of the high-level strategies of the HR department, plan and develop new recruitment strategies, oversee staff benefits, and more" //optional
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {string} name  name
 * @apiBody {string} [fullName]  fullName
 * @apiBody {string} [comment] comment
 */


/**
 * @api {get} /api/v1/getDesignations 2.Get Designations
 * @apiVersion 1.0.0
 * @apiName    Get Designations
 * @apiGroup   Rgca-designation
 *
 * @apiHeader Authorization Basic Access Authentication token.
 */

/**
 * @api {put} /api/v1/updateDesignation 3.Update Designation
 * @apiVersion 1.0.0
 * @apiName    Update Designation
 * @apiGroup   Rgca-designation
 * @apiExample Example usage:
 * {
 *      "designationID": 1,
 *      "name":"HR",
 *      "fullName":"Human Resources" //optional
 *      "comment":"HR managers have a more hands-on role and are responsible for the day-to-day planning and execution of the high-level strategies of the HR department, plan and develop new recruitment strategies, oversee staff benefits, and more" //optional
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {number} designationID  designationID
 * @apiBody {string} name designation
 * @apiBody {string} [fullName]  fullName
 * @apiBody {string} [comment] comment
 */

// Delete
/**
 * @api {delete} /api/v1/deleteDesignation/:designationID  4. Delete designation
 * @apiVersion 1.0.0
 * @apiName    Delete designation
 * @apiGroup   Rgca-designation
 * @apiParam   {int} designationID  designationID designationID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {post} /api/v1/fileUpload 13. File Upload
 * @apiVersion 1.0.0
 * @apiName    File Upload
 * @apiGroup   Rgca
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {file} upload  upload
 */


/**
 * @api {post} /api/v1/addRole 15. Add Role
 * @apiVersion 1.0.0
 * @apiName    Add Role
 * @apiGroup   Rgca
 * @apiExample Example usage:
 * {
 *  "roleName":"Driver"
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {string} roleName  roleName
 */


/**
 * @api {get} /api/v1/getRoles 16. Get Roles
 * @apiVersion 1.0.0
 * @apiName    Get Roles
 * @apiGroup   Rgca
 *
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {get} /api/v1/getAccessRoles 17.get Access Roles
 * @apiVersion 1.0.0
 * @apiName    get Access Roles
 * @apiGroup   Rgca
 *
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {post} /api/v1/accessRolePermissionMange 18.Access Role Permission Mange
 * @apiVersion 1.0.0
 * @apiName    Access Role Permission Mange
 * @apiGroup   Rgca
 * @apiExample Example usage:
 * {
 *  "accessRoleID":number,
 *   "actionID":number
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {Number} accessRoleID  accessRoleID
 * @apiParam (Request body) {Number} actionID  actionID
 */

/**
 * @api {post} /api/v1/addEmployee 1.Add Employee
 * @apiVersion 1.0.0
 * @apiName    Add Employee
 * @apiGroup   Employee
 * @apiExample Example usage:
 * {
 *   "employeeCode" :"RGCA-00",
 *   "firstName":"Ashok",
 *   "lastName":"Reddy ",
 *   "fatherName":"Harendra Reddy",
 *   "aadharNumber":"232323232323",
 *   "aadharAttchement":"aadhar Url",
 *   "gender":11,
 *   "biometricImprints":"" // optional,
 *   "dateOfBirth":"10/05/1994",
 *   "statusOfPhysicallyChallenged":0,
 *   "statusOfPhysicallyChallengedNote": ""  // optional,
 *   "dateOfJoining":"08/11/2017",
 *   "email":"ashokcse5052gmail.com",
 *   "phone":"94915381225",
 *   "password":"Test@123",
 *   "appointmentLetter":"url",
 *   "designationID":1,
 *   "accessRoleID":1,
 *   "statusComment": "" // optional,
 *   "projects":[1,2,3] // optional
 *}
 *
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiParam (Request body) {string} employeeCode  employeeCode
 * @apiParam (Request body) {string} firstName  firstName
 * @apiParam (Request body) {string} lastName  lastName
 * @apiParam (Request body) {string} fatherName  fatherName
 * @apiParam (Request body) {string} aadharNumber  aadharNumber
 * @apiParam (Request body) {string} aadharAttchement  aadharAttchement
 * @apiParam (Request body) {Number} gender  gender
 * @apiParam (Request body) {string} [biometricImprints]  biometricImprints
 * @apiParam (Request body) {Date} dateOfBirth  dateOfBirth
 * @apiParam (Request body) {Boolean} statusOfPhysicallyChallenged  statusOfPhysicallyChallenged
 * @apiParam (Request body) {string} [statusOfPhysicallyChallengedNote]  statusOfPhysicallyChallengedNote
 * @apiParam (Request body) {string} dateOfJoining  dateOfJoining
 * @apiParam (Request body) {string} email  email
 * @apiParam (Request body) {Date} password  password
 * @apiParam (Request body) {Number} phone  phone
 * @apiParam (Request body) {string} appointmentLetter  appointmentLetter
 * @apiParam (Request body) {Number} designationID  designationID
 * @apiParam (Request body) {Number} accessRoleID  accessRoleID
 * @apiParam (Request body) {string} appointmentLetter  appointmentLetter
 * @apiParam (Request body) {string} [statusComment]  statusComment
 * @apiParam (Request body) {Array} [projects]  projects
 */


/**
 * @api {put} /api/v1/updateEmployee 2.Update Employee
 * @apiVersion 1.0.0
 * @apiName    Update Employee
 * @apiGroup   Employee
 * @apiExample Example usage:
 * {
 *     "employeeID": 8,
 *     "employeeCode" :"RGCA-009",
 *     "firstName":"Ashok",
 *     "lastName":"Reddy ",
 *     "fatherName":"Harendra Reddy",
 *     "aadharNumber":"232323232323",
 *     "biometricImprints": "", // optional
 *     "aadharAttchement":"aadhar Url",
 *     "gender":11,
 *     "dateOfBirth":"10/05/1994",
 *     "statusOfPhysicallyChallenged":0,
 *     "statusOfPhysicallyChallengedNote": "", // optional
 *     "dateOfJoining":"08/11/2017",
 *     "email":"admin1@gmail.com",
 *     "phone":"9491538124",
 *     "password":"Test@123", // optional
 *     "appointmentLetter":"url",
 *     "designationID":1,
 *     "accessRoleID":1',
 *     "statusComment": "", // optional
 *     "projects":[1,2,3] // optional
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.

 * @apiParam (Request body) {number} employeeID  employeeID
 * @apiParam (Request body) {string} employeCode  employeCode
 * @apiParam (Request body) {string} firstName  firstName
 * @apiParam (Request body) {string} lastName  lastName
 * @apiParam (Request body) {string} fatherName  fatherName
 * @apiParam (Request body) {string} aadharNumber  aadharNumber
 * @apiParam (Request body) {string} aadharAttchement  aadharAttchement
 * @apiParam (Request body) {Number} gender  gender
 * @apiParam (Request body) {string} biometricImprints  biometricImprints
 * @apiParam (Request body) {Date} dateOfBirth  dateOfBirth
 * @apiParam (Request body) {Boolean} statusOfPhysicallyChallenged  statusOfPhysicallyChallenged
 * @apiParam (Request body) {string} [statusOfPhysicallyChallengedNote]  statusOfPhysicallyChallengedNote
 * @apiParam (Request body) {string} dateOfJoining  dateOfJoining
 * @apiParam (Request body) {string} email  email
 * @apiParam (Request body) {Date} password  password
 * @apiParam (Request body) {Number} phone  phone
 * @apiParam (Request body) {string} appointmentLetter  appointmentLetter
 * @apiParam (Request body) {Number} designationID  designationID
 * @apiParam (Request body) {Number} accessRoleID  accessRoleID
 * @apiParam (Request body) {string} appointmentLetter  appointmentLetter
 * @apiParam (Request body) {string} [statusComment]  statusComment
 * @apiParam (Request body) {Array} [projects]  projects
 */

/**
 * @api {get} /api/v1/getEmployee 3.Get Employee
 * @apiVersion 1.0.0
 * @apiName    Get Employee
 * @apiGroup   Employee
 * @apiHeader Authorization Basic Access Authentication token.
 */

/**
 * @api {delete} /api/v1/deleteEmployee/:employeeID  4. Delete Employee
 * @apiVersion 1.0.0
 * @apiName    Delete Employee
 * @apiGroup   Employee
 * @apiParam   {int} employeeID employeeID employeeID.
 * @apiHeader Authorization Basic Access Authentication token.
 */







/**
 * @api {get} /api/v1/approvalMasterList/:projectID 1.get Approval Master
 * @apiVersion 1.0.0
 * @apiName    get Approval Master
 * @apiGroup   Approval
 * @apiParam {int} projectID     projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {get} /api/v1/getApprovalList/:approvalID 2.get Approval List
 * @apiVersion 1.0.0
 * @apiName    get Approval List
 * @apiGroup   Approval
 * @apiParam {int} approvalID     approvalID approvalID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {post} /api/v1/addApproval 3.Add Approval
 * @apiVersion 1.0.0
 * @apiName    Add Approval
 * @apiGroup   Approval
 *  @apiExample Example usage:
 *{
 *    approvalID :1
 *   "list":[1,2,3] //access roles
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiParam (Request body) {Array} list  list
 * @apiParam (Request body) {Number} approvalID  approvalID
 */



/**
 * @api {post} /api/v1/getProductsForIndent 1.get Materials
 * @apiVersion 1.0.0
 * @apiName    get Materials
 * @apiGroup   Indent
 * @apiExample Example usage:
 *{
 *    projectID: 1, //selected Project
 *    typeID: 2 ,// capital or recurring/,
 *    searchText: 'test' // autocomplete text
 *  // please use debounce method
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {Number} projectID  projectID
 * @apiParam (Request body) {Number} typeID  typeID
 * @apiParam (Request body) {string} searchText  searchText
 */

/**
* @api {put} /api/v1/updateItems 2.Update Materials
* @apiVersion 1.0.0
* @apiName    Update Materials
* @apiGroup   Indent
* @apiExample Example usage:
* {
* "itemID": 11,
* "description": "s",
* "brandOrCatalogue": "s",
* "name": "s",
* "uom": "s",
* "subCategoryID": 10
* }
* @apiHeader Authorization Basic Access Authentication token.
*
* @apiParam (Request body) {Number} itemID  itemID
* @apiParam (Request body) {Number} subCategoryID  subCategoryID
* @apiParam (Request body) {string} name  name
* @apiParam (Request body) {string} brandOrCatalogue  brandOrCatalogue
* @apiParam (Request body) {string} uom  uom
* @apiParam (Request body) {string} description  description

*/



/**
 * @api {post} /api/v1/addIndent 2.Add Indent
 * @apiVersion 1.0.0
 * @apiName    Add Indent
 * @apiGroup   Indent
 * @apiExample Example usage:
 * {
 *    "projectID":1,
 *    "quoteUrl":"hello",
 *    "items":[
 *       {
 *          "itemID":1,
 *          "Qty":5,
 *          "estimatedPrice":20.5,
 *          "comment":""
 *       },
 *       {
 *          "itemID":1,
 *          "Qty":5,
 *          "estimatedPrice":20000.5,
 *          "comment":""
 *       }
 *    ]
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body)  {Number} projectID  projectID.
 * @apiParam (Request body)  {string} quoteUrl  quoteUrl.
 * @apiParam (Request body) {Number} items.itemID  itemID.
 * @apiParam (Request body) {Number} items.Qty  Qty.
 * @apiParam (Request body) {Number} items.estimatedPrice  estimatedPrice.
 * @apiParam (Request body) {string} items.comment  comment.
 */



/**
 * @api {get} /api/v1/getIndentApprovalList/:projectID 3.get Indent Approval List
 * @apiVersion 1.0.0
 * @apiName    get Indent Approval List
 * @apiGroup   Indent
 * @apiParam {int} projectID     projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {get} /api/v1/getUserIndentList/:projectID 4.get User Indent List
 * @apiVersion 1.0.0
 * @apiName    get User Indent List
 * @apiGroup   Indent
 * @apiParam {int} projectID     projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


/**
 * @api {post} /api/v1/updateApproval 5.Update Approval
 * @apiName    Update Approval
 * @apiGroup   Indent
 * @apiExample Example usage:
 * {
 *  "statusID":24,
 *  "indentMasterID":"SBH-INDENT-1"
 *  "comment":"Hello"
 * }
 * status ID: -> lookupID =23
 * [{"statusID":24,"name":"Approved"},
 * {"statusID":25,"name":"Rejected"},
 * {"statusID":26,"name":"Hold"},
 * {"statusID":27,"name":"Modification"},
 * {"statusID":28,"name":"Dropped"}]
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {Number} statusID  statusID
 * @apiParam (Request body) {string} indentMasterID  indentMasterID
 * @apiParam (Request body) {string} comment  comment
 */

/**
 * @api {post} /api/v1/deleteIndentItem 6.Delete Indent Item
 * @apiName    Delete Indent Item
 * @apiGroup   Indent
 * @apiExample Example usage:
 * {
 *  "indentItemID":45656,
 *  "indentMasterID":"SBH-INDENT-1"
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {Number} indentItemID  indentItemID
 * @apiParam (Request body) {string} indentMasterID  indentMasterID
 */

/**
 * @api {post} /api/v1/indentItemUpdate 7.Update Indent Item
 * @apiName    Update Indent Item
 * @apiGroup   Indent
 * @apiExample Example usage:
 * {
 *  "indentMasterID":"SBH-INDENT-1",
 *  "items":[
 *      {
 *          "indentItemID":1,
 *          "Qty":5,
 *          "estimatedPrice":20.5
 *       },
 *       {
 *          "indentItemID":1,
 *          "Qty":5,
 *          "estimatedPrice":20000.5
 *       }
 *  }]
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiParam (Request body) {string} indentMasterID  indentMasterID
 * @apiParam (Request body) {Number} items.indentItemID  indentItemID.
 * @apiParam (Request body) {Number} items.Qty  Qty.
 * @apiParam (Request body) {Number} items.estimatedPrice  estimatedPrice.
 */


/**
 * @api {post} /api/v1/addProject 1.Add Project
 * @apiVersion 1.0.0
 * @apiName    Add Project
 * @apiGroup   Project
 * @apiExample Example usage:
 *{
 *  "projectName": "RGCA Seabass Hatchery",
 *  "Description": "Healthy Fry/Fingerlings of Asian Seabass, free from VNN and produced from quarantined parent stock in bio-secure rearing systems is available for supply. The seeds would be supplied on first come first serve basis. Packing of seed in desired salinity/or freshwater shall be made upon request in advance",
 *  "shortID": "SBH",  // uinque key
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
 * @apiBody {string} projectName projectName
 * @apiBody {string} Description Description
 * @apiBody {string} shortID shortID
 * @apiBody {Number} mobile mobile
 * @apiBody {string} bankName bankName
 * @apiBody {Number} bankAccountNo bankAccountNo
 * @apiBody {string} bankBranch bankBranch
 * @apiBody {string} bankIFSC bankIFSC
 * @apiBody {string} bankAccountType bankAccountType
 * @apiBody {string} line_1 line_1
 * @apiBody {string} line_2 line_2
 * @apiBody {string} line_3 line_3
 * @apiBody {string} district district
 * @apiBody {string} state state
 * @apiBody {string} country country
 * @apibody {Number} postalCode postalCode
 */

/**
 * @api {put} /api/v1/updateProject 1.Update Project
 * @apiVersion 1.0.0
 * @apiName    update Project
 * @apiGroup   Project
 * @apiExample Example usage:
 * {
 *  "projectID" : 1 ,
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
 * }
 *
 * @apiHeader Authorization Basic Access Authentication token.
 *
 * @apiBody {Number} projectID ProjectID
 * @apiBody {string} projectName projectName
 * @apiBody {string} Description Description
 * @apiBody {string} shortID shortID
 * @apiBody {Number} mobile mobile
 * @apiBody {string} bankName bankName
 * @apiBody {Number} bankAccountNo bankAccountNo
 * @apiBody {string} bankBranch bankBranch
 * @apiBody {string} bankIFSC bankIFSC
 * @apiBody {string} bankAccountType bankAccountType
 * @apiBody {string} line_1 line_1
 * @apiBody {string} line_2 line_2
 * @apiBody {string} line_3 line_3
 * @apiBody {string} district district
 * @apiBody {string} state state
 * @apiBody {string} country country
 * @apibody {Number} postalCode postalCode
 * */

/**
 * @api {post} /api/v1/getProjects 3. Get Projects
 * @apiVersion 1.0.0
 * @apiName    Get Projects
 * @apiGroup   Project
 * @apiExample Example usage:
 * {
 *  "searchText" : "" // optional
 * }
 * @apiHeader Authorization Basic Access Authentication token.
 * @apiBody {String} searchText searchText
 */

/**
 * @api {get} /api/v1/getProjectProfile/:projectID  4. Get Project Profile
 * @apiVersion 1.0.0
 * @apiName    Get  project profile
 * @apiGroup   Project
 * @apiParam   {int} projectID projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */


// Delete
/**
 * @api {delete} /api/v1//deleteProject/:projectID 5. Delete Project
 * @apiVersion 1.0.0
 * @apiName    Delete Project
 * @apiGroup   Project
 * @apiParam   {int} projectID projectID projectID.
 * @apiHeader Authorization Basic Access Authentication token.
 */