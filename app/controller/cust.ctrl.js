const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const { getCustomer } = require("../query/cust.query");
const { addCustomerSP } = require("../services/cust.services");
module.exports.getCustomer = async (req, res) => {
  try {
    const resp = await query(getCustomer(req.user.storeID));

    let list = mysqlResponseHandler(resp);

    responseHandler.successResponse(res, list, responseMessages.getCustomer);
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.addCustomer = async (req, res) => {
  try {
    const customerSchema = Joi.object({
      name: Joi.string().required(),
      mobileNo: Joi.string().required(),
      city: Joi.string().required(),
    });
    try {
      await customerSchema.validateAsync(req.body);
      const resp = await addCustomerSP(req.body,req.user.storeID)
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Added Customer"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
