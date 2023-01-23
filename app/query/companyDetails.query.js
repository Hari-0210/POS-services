module.exports = {
  addCompanyDetailsQuery: (values, storeID) =>
    values.isFirst
      ? `Insert into companyDetails (companyName,address,state,mobileNumber,email,gst,bankName,accHolderName,accNumber,accType,ifscCode,branch,storeID,imagePath) values 
      ('${values.companyName}','${values.address}','${values.state}','${values.mobileNumber}','${values.email}','${values.gst}','${values.bankName}','${values.accHolderName}','${values.accNumber}','${values.accType}','${values.ifscCode}','${values.branch}',${storeID}, '${values.imagePath}')`
      : `UPDATE companyDetails
       SET companyName = '${values.companyName}',
        address = '${values.address}',
        state = '${values.state}',
        mobileNumber = '${values.mobileNumber}',
        email = '${values.email}',
        gst = '${values.gst}',
        bankName = '${values.bankName}',
        accHolderName = '${values.accHolderName}',
        accNumber = '${values.accNumber}',
        accType = '${values.accType}',
        ifscCode = '${values.ifscCode}',
        branch = '${values.branch}',
        imagePath = "${values.imagePath}"
       WHERE storeID = ${storeID}`,
  getCompanyDetailsQuery: (storeID) =>
    `select * from companyDetails where storeID = ${storeID}`,
  updatePassword: (values, userID) => `update userDetails
  SET password = '${values.password}', pass = '${values.pass}'
  WHERE userID = ${userID}`,
};
