const Joi = require("joi");
const { passwordHash } = require("../../helper/bcryptPassword");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const {
  addCompanyDetailsQuery,
  getCompanyDetailsQuery,
  updatePassword,
} = require("../query/companyDetails.query");

module.exports.addCompanyDetails = async (req, res) => {
  try {
    const companySchema = Joi.object({
      companyName: Joi.string().required(),
      address: Joi.string().required(),
      state: Joi.string().required(),
      mobileNumber: Joi.string().required(),
      email: Joi.string().optional().allow(""),
      gst: Joi.string().optional().allow(""),
      bankName: Joi.string().optional().allow(""),
      accHolderName: Joi.string().optional().allow(""),
      accNumber: Joi.string().optional().allow(""),
      accType: Joi.string().optional().allow(""),
      ifscCode: Joi.string().optional().allow(""),
      branch: Joi.string().optional().allow(""),
      //   orderMinimumAmount: Joi.string().optional().allow(""),
      isFirst: Joi.boolean().required(),
      imagePath: Joi.string().optional().allow(""),
    });
    try {
      await companySchema.validateAsync(req.body);
      const resp = await query(
        addCompanyDetailsQuery(req.body, req.user.storeID)
      );

      const rows = mysqlSingleResponseHandler(resp);

      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Updated "
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.getCompanyDetails = async (req, res) => {
  try {
    const resp = await query(getCompanyDetailsQuery(req.user.storeID));

    let list = mysqlSingleResponseHandler(resp);

    responseHandler.successResponse(
      res,
      list,
      responseMessages.getCompanyDetails
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.updatePassword = async (req, res) => {
  try {
    const passwordSchema = Joi.object({
      password: Joi.string().required(),
    });
    try {
      await passwordSchema.validateAsync(req.body);
      var pass;
      pass = req.body.password;
      req.body.pass = pass;
      req.body.password = await passwordHash(req.body.password);
      const resp = await query(updatePassword(req.body, req.user.userID));

      const rows = mysqlSingleResponseHandler(resp);

      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Password Successfully Updated"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
