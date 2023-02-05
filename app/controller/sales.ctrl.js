const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const {
  addSalesQuery,
  getSalesQuery,
  deleteSalesQuery,
  updateSalesQuery,
} = require("../query/sales.query");
const { addSalesSP } = require("../services/sales.services");

module.exports.addSales = async (req, res) => {
  try {
    const productsSchema = Joi.object().keys({
      productName: Joi.string().required(),
      productCost: Joi.string().required(),
      productQty: Joi.number().required(),
    });
    const SalesSchema = Joi.object({
      customerID: Joi.number().required(),
      totalNoofProducts: Joi.number().required(),
      subTotal: Joi.string().required(),
      discount: Joi.number().required(),
      packingCost: Joi.number().required(),
      total: Joi.string().required(),
      products: Joi.array().items(productsSchema),
    });

    try {
      await SalesSchema.validateAsync(req.body);
      const resp = await query(addSalesQuery(req.body, req.user.storeID));
      console.log(resp);
      const rows = mysqlSingleResponseHandler(resp);

      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully  Sales Added  "
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
module.exports.getSales = async (req, res) => {
  try {
    const resp = await query(getSalesQuery(req.user.storeID));

    let list = mysqlResponseHandler(resp);

    responseHandler.successResponse(res, list, responseMessages.getSales);
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.updateSales = async (req, res) => {
  try {
    const productsSchema = Joi.object().keys({
      productName: Joi.string().required(),
      productCost: Joi.string().required(),
      productQty: Joi.number().required(),
    });
    const SalesSchema = Joi.object({
      salesMasterID: Joi.number().required(),
      customerID: Joi.number().required(),
      totalNoofProducts: Joi.number().required(),
      subTotal: Joi.string().required(),
      discount: Joi.number().required(),
      packingCost: Joi.number().required(),
      total: Joi.string().required(),
      products: Joi.array().items(productsSchema),
    });

    try {
      await SalesSchema.validateAsync(req.body);
      const resp = await query(updateSalesQuery(req.body));
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        { ...rows },
        responseMessages.updateSalesSuccessfully
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.deleteSales = async (req, res) => {
  try {
    const SalesSchema = Joi.object({
      salesMasterID: Joi.number().required(),
    });
    try {
      await SalesSchema.validateAsync(req.params);
      const resp = await query(deleteSalesQuery(req.params.salesMasterID));
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Deleted  SalesProduct"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
