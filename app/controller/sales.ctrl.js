const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const { addSalesQuery } = require("../query/sales.query");
const { addSalesSP } = require("../services/sales.services");

module.exports.addSales = async (req, res) => {
  try {
    const productsSchema = Joi.object().keys({
      productID: Joi.number().required(),
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
      const resp = await query(addSalesQuery(req.body));
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
