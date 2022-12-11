define({
  api: [
    {
      type: "post",
      url: "/api/v1/addApproval",
      title: "3.Add Approval",
      version: "1.0.0",
      name: "Add_Approval",
      group: "Approval",
      examples: [
        {
          title: "Example usage:",
          content: '{\n   approvalID :1\n  "list":[1,2,3] //access roles\n}',
          type: "json",
        },
      ],
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              optional: false,
              field: "Authorization",
              description: "<p>Basic Access Authentication token.</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          "Request body": [
            {
              group: "Request body",
              type: "Array",
              optional: false,
              field: "list",
              description: "<p>list</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "approvalID",
              description: "<p>approvalID</p>",
            },
          ],
        },
      },
      filename: "apidoc/api.js",
      groupTitle: "Approval",
      sampleRequest: [
        {
          url: "http://localhost:8500/api/v1/addApproval",
        },
      ],
    },
    {
      type: "get",
      url: "/api/v1/getApprovalList/:approvalID",
      title: "2.get Approval List",
      version: "1.0.0",
      name: "get_Approval_List",
      group: "Approval",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "int",
              optional: false,
              field: "approvalID",
              description: "<p>approvalID approvalID.</p>",
            },
          ],
        },
      },
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              optional: false,
              field: "Authorization",
              description: "<p>Basic Access Authentication token.</p>",
            },
          ],
        },
      },
      filename: "apidoc/api.js",
      groupTitle: "Approval",
      sampleRequest: [
        {
          url: "http://localhost:8500/api/v1/getApprovalList/:approvalID",
        },
      ],
    },
    {
      type: "get",
      url: "/api/v1/approvalMasterList/:projectID",
      title: "1.get Approval Master",
      version: "1.0.0",
      name: "get_Approval_Master",
      group: "Approval",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "int",
              optional: false,
              field: "projectID",
              description: "<p>projectID projectID.</p>",
            },
          ],
        },
      },
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              optional: false,
              field: "Authorization",
              description: "<p>Basic Access Authentication token.</p>",
            },
          ],
        },
      },
      filename: "apidoc/api.js",
      groupTitle: "Approval",
      sampleRequest: [
        {
          url: "http://localhost:8500/api/v1/approvalMasterList/:projectID",
        },
      ],
    },
    {
      type: "post",
      url: "/api/v1/addEmployee",
      title: "1.Add Employee",
      version: "1.0.0",
      name: "Add_Employee",
      group: "Employee",
      examples: [
        {
          title: "Example usage:",
          content:
            '{\n  "employeCode" :"RGCA-00",\n  "firstName":"Ashok",\n  "lastName":"Reddy ",\n  "fatherName":"Harendra Reddy",\n  "aadharNumber":"232323232323",\n  "aadharAttchement":"aadhar Url",\n  "gender":11,\n  "biometricImprints":"" // optional,\n  "dateOfBirth":"10/05/1994",\n  "statusOfPhysicallyChallenged":0,\n  "statusOfPhysicallyChallengedNote": ""  // optional,\n  "dateOfJoining":"08/11/2017",\n  "email":"ashokcse5052gmail.com",\n  "phone":"94915381225",\n  "password":"Test@123",\n  "appointmentLetter":"url",\n  "designationID":1,\n  "accessRoleID":1,\n  "statusComment": "" // optional,\n  "projects":[1,2,3] // optional\n}',
          type: "json",
        },
      ],
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              optional: false,
              field: "Authorization",
              description: "<p>Basic Access Authentication token.</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          "Request body": [
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "employeeCode",
              description: "<p>employeeCode</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "firstName",
              description: "<p>firstName</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "lastName",
              description: "<p>lastName</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "fatherName",
              description: "<p>fatherName</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "aadharNumber",
              description: "<p>aadharNumber</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "aadharAttchement",
              description: "<p>aadharAttchement</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "gender",
              description: "<p>gender</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: true,
              field: "biometricImprints",
              description: "<p>biometricImprints</p>",
            },
            {
              group: "Request body",
              type: "Date",
              optional: false,
              field: "dateOfBirth",
              description: "<p>dateOfBirth</p>",
            },
            {
              group: "Request body",
              type: "Boolean",
              optional: false,
              field: "statusOfPhysicallyChallenged",
              description: "<p>statusOfPhysicallyChallenged</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: true,
              field: "statusOfPhysicallyChallengedNote",
              description: "<p>statusOfPhysicallyChallengedNote</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "dateOfJoining",
              description: "<p>dateOfJoining</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "email",
              description: "<p>email</p>",
            },
            {
              group: "Request body",
              type: "Date",
              optional: false,
              field: "password",
              description: "<p>password</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "phone",
              description: "<p>phone</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "appointmentLetter",
              description: "<p>appointmentLetter</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "designationID",
              description: "<p>designationID</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "accessRoleID",
              description: "<p>accessRoleID</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: true,
              field: "statusComment",
              description: "<p>statusComment</p>",
            },
            {
              group: "Request body",
              type: "Array",
              optional: true,
              field: "projects",
              description: "<p>projects</p>",
            },
          ],
        },
      },
      filename: "apidoc/api.js",
      groupTitle: "Employee",
      sampleRequest: [
        {
          url: "http://localhost:8500/api/v1/addEmployee",
        },
      ],
    },
    {
      type: "delete",
      url: "/api/v1/deleteEmployee/:employeeID",
      title: "4. Delete Employee",
      version: "1.0.0",
      name: "Delete_Employee",
      group: "Employee",
      parameter: {
        fields: {
          Parameter: [
            {
              group: "Parameter",
              type: "int",
              optional: false,
              field: "employeeID",
              description: "<p>employeeID employeeID.</p>",
            },
          ],
        },
      },
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              optional: false,
              field: "Authorization",
              description: "<p>Basic Access Authentication token.</p>",
            },
          ],
        },
      },
      filename: "apidoc/api.js",
      groupTitle: "Employee",
      sampleRequest: [
        {
          url: "http://localhost:8500/api/v1/deleteEmployee/:employeeID",
        },
      ],
    },
    {
      type: "get",
      url: "/api/v1/getEmployee",
      title: "3.Get Employee",
      version: "1.0.0",
      name: "Get_Employee",
      group: "Employee",
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              optional: false,
              field: "Authorization",
              description: "<p>Basic Access Authentication token.</p>",
            },
          ],
        },
      },
      filename: "apidoc/api.js",
      groupTitle: "Employee",
      sampleRequest: [
        {
          url: "http://localhost:8500/api/v1/getEmployee",
        },
      ],
    },
    {
      type: "put",
      url: "/api/v1/updateEmployee",
      title: "2.Update Employee",
      version: "1.0.0",
      name: "Update_Employee",
      group: "Employee",
      examples: [
        {
          title: "Example usage:",
          content:
            '{\n    "employeeID": 8,\n    "employeeCode" :"RGCA-009",\n    "firstName":"Ashok",\n    "lastName":"Reddy ",\n    "fatherName":"Harendra Reddy",\n    "aadharNumber":"232323232323",\n    "biometricImprints": "", // optional\n    "aadharAttchement":"aadhar Url",\n    "gender":11,\n    "dateOfBirth":"10/05/1994",\n    "statusOfPhysicallyChallenged":0,\n    "statusOfPhysicallyChallengedNote": "", // optional\n    "dateOfJoining":"08/11/2017",\n    "email":"admin1@gmail.com",\n    "phone":"9491538124",\n    "password":"Test@123", // optional\n    "appointmentLetter":"url",\n    "designationID":1,\n    "accessRoleID":1\',\n    "statusComment": "", // optional\n    "projects":[1,2,3] // optional\n}',
          type: "json",
        },
      ],
      header: {
        fields: {
          Header: [
            {
              group: "Header",
              optional: false,
              field: "Authorization",
              description: "<p>Basic Access Authentication token.</p>",
            },
          ],
        },
      },
      parameter: {
        fields: {
          "Request body": [
            {
              group: "Request body",
              type: "number",
              optional: false,
              field: "employeeID",
              description: "<p>employeeID</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "employeCode",
              description: "<p>employeCode</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "firstName",
              description: "<p>firstName</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "lastName",
              description: "<p>lastName</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "fatherName",
              description: "<p>fatherName</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "aadharNumber",
              description: "<p>aadharNumber</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "aadharAttchement",
              description: "<p>aadharAttchement</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "gender",
              description: "<p>gender</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "biometricImprints",
              description: "<p>biometricImprints</p>",
            },
            {
              group: "Request body",
              type: "Date",
              optional: false,
              field: "dateOfBirth",
              description: "<p>dateOfBirth</p>",
            },
            {
              group: "Request body",
              type: "Boolean",
              optional: false,
              field: "statusOfPhysicallyChallenged",
              description: "<p>statusOfPhysicallyChallenged</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: true,
              field: "statusOfPhysicallyChallengedNote",
              description: "<p>statusOfPhysicallyChallengedNote</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "dateOfJoining",
              description: "<p>dateOfJoining</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "email",
              description: "<p>email</p>",
            },
            {
              group: "Request body",
              type: "Date",
              optional: false,
              field: "password",
              description: "<p>password</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "phone",
              description: "<p>phone</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: false,
              field: "appointmentLetter",
              description: "<p>appointmentLetter</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "designationID",
              description: "<p>designationID</p>",
            },
            {
              group: "Request body",
              type: "Number",
              optional: false,
              field: "accessRoleID",
              description: "<p>accessRoleID</p>",
            },
            {
              group: "Request body",
              type: "string",
              optional: true,
              field: "statusComment",
              description: "<p>statusComment</p>",
            },
            {
              group: "Request body",
              type: "Array",
              optional: true,
              field: "projects",
              description: "<p>projects</p>",
            },
          ],
        },
      },
      filename: "apidoc/api.js",
      groupTitle: "Employee",
      sampleRequest: [
        {
          url: "http://localhost:8500/api/v1/updateEmployee",
        },
      ],
    },
  ],
});
