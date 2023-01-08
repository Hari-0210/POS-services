const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const { addDummySalesQuery, getDummySalesQuery, dummyDeleteSalesQuery } = require("../query/dSales.query");


module.exports.addDummySales = async (req, res) => {
  try {
    const productsSchema = Joi.object().keys({
      productCode: Joi.string().required(),
      productName: Joi.string().required(),
      productQty: Joi.number().required(),
      productCost: Joi.number().required(),
    });
    const SalesSchema = Joi.object({
      customerID: Joi.number().required(),
      estimateNum: Joi.number().required(),
      totalNoofProducts: Joi.number().required(),
      subTotal: Joi.string().required(),
      discount: Joi.number().required(),
      packingCost: Joi.number().required(),
      total: Joi.string().required(),
      products: Joi.array().items(productsSchema),
    });

    try {
      await SalesSchema.validateAsync(req.body);
      const resp = await query(addDummySalesQuery(req.body, req.user.storeID));
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

module.exports.getDummySales = async (req, res) => {
    try {
      const resp = await query(getDummySalesQuery(req.user.storeID));
  
      let list = mysqlResponseHandler(resp);
  
      responseHandler.successResponse(res, list, responseMessages.getSales);
    } catch (err) {
      responseHandler.errorResponse(res, err.message, commonErrorMessage);
    }
  };

  module.exports.dummyDeleteSales = async (req, res) => {
    try {
      const SalesSchema = Joi.object({
        dummySalesMasterID: Joi.number().required(),
      });
      try {
        await SalesSchema.validateAsync(req.params);
        const resp = await query(dummyDeleteSalesQuery(req.params.dummySalesMasterID));
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