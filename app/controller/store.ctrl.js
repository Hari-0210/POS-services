const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const {
  addStoreQuery,
  updateStoreQuery,
  deleteStoreQuery,
  getStoreQuery,
} = require("../query/store.query");

module.exports.addStore = async (req, res) => {
  try {
    const storeSchema = Joi.object({
      storeName: Joi.string().required(),
    });
    try {
      await storeSchema.validateAsync(req.body);
      const resp = await query(addStoreQuery(req.body.storeName));
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Added Store "
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
exports.getStore = async (req, res) => {
  try {
    const storeSchema = Joi.object({
      searchText: Joi.string().allow(""),
    });

    try {
      await storeSchema.validateAsync(req.body);
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
      return false;
    }

    const resp = await query(getStoreQuery(req.body.searchText));
    let list = mysqlResponseHandler(resp);
    responseHandler.successResponse(
      res,
      list,
      responseMessages.getStoreSuccesfully
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.updateStore = async (req, res) => {
  try {
    const storeSchema = Joi.object({
      storeName: Joi.string().required(),
      storeID: Joi.number().required(),
    });
    try {
      await storeSchema.validateAsync(req.body);
      const resp = await query(
        updateStoreQuery(req.body.storeName, req.body.storeID)
      );
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        { ...rows },
        responseMessages.updateStoreSuccessfully
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.deleteStore = async (req, res) => {
  try {
    const storeSchema = Joi.object({
      storeID: Joi.number().required(),
    });
    try {
      await storeSchema.validateAsync(req.params);
      const resp = await query(deleteStoreQuery(req.params.storeID));
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Deleted Store Category"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
