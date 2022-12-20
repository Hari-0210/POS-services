const {
  addBrandQuery,
  getBrandQuery,
  updateBrandQuery,
  deleteBrandQuery,
} = require("../query/brand.query");
const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");

module.exports.addBrand = async (req, res) => {
  try {
    const brandSchema = Joi.object({
      brandName: Joi.string().required(),
    });
    try {
      await brandSchema.validateAsync(req.body);
      const resp = await query(addBrandQuery(req.body.brandName));

      const rows = mysqlSingleResponseHandler(resp);

      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Added Brand "
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.getBrand = async (req, res) => {
  try {
    const resp = await query(getBrandQuery(req.body.searchText));

    let list = mysqlResponseHandler(resp);

    responseHandler.successResponse(
      res,
      list,
      responseMessages.getBrandSuccessfully
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.updateBrand = async (req, res) => {
  try {
    const brandSchema = Joi.object({
      brandName: Joi.string().required(),
      brandID: Joi.number().required(),
    });
    try {
      await brandSchema.validateAsync(req.body);
      const resp = await query(
        updateBrandQuery(req.body.brandName, req.body.brandID)
      );

      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        responseMessages.updateBrandSuccessfully
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.deleteBrand = async (req, res) => {
  try {
    const productCategorySchema = Joi.object({
      brandID: Joi.number().required(),
    });
    try {
      await productCategorySchema.validateAsync(req.params);
      const resp = await query(deleteBrandQuery(req.params.brandID));
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Deleted Brand Category"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
