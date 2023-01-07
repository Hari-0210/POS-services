const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const {
  addProductCategoryQuery,
  getProductCategoryQuery,
  updateProductCategoryQuery,
  deleteProductCategoryQuery,
  getProductQuery,
  deleteProductQuery,
  getProductByCategoryQuery,
} = require("../query/product.query");
const {
  addProductSP,
  updateProductSP,
  deleteProductCategorySP,
} = require("../services/product.services");

module.exports.addProductCategory = async (req, res) => {
  try {
    const productCategorySchema = Joi.object({
      productCategoryName: Joi.string().required(),
    });
    try {
      await productCategorySchema.validateAsync(req.body);
      const resp = await query(
        addProductCategoryQuery(req.body.productCategoryName, req.user.storeID)
      );
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Added Product Category"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

exports.getProductCategory = async (req, res) => {
  try {
    const productCategorySchema = Joi.object({
      searchText: Joi.string().allow(""),
    });

    try {
      await productCategorySchema.validateAsync(req.body);
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
      return false;
    }

    const resp = await query(
      getProductCategoryQuery(req.body.searchText, req.user.storeID)
    );
    let list = mysqlResponseHandler(resp);
    responseHandler.successResponse(
      res,
      list,
      responseMessages.getProductCategorySuccessfully
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.updateProductCategory = async (req, res) => {
  try {
    const productCategorySchema = Joi.object({
      productCategoryName: Joi.string().required(),
      productCategoryID: Joi.number().required(),
    });
    try {
      await productCategorySchema.validateAsync(req.body);
      const resp = await query(
        updateProductCategoryQuery(
          req.body.productCategoryName,
          req.body.productCategoryID
        )
      );
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        { ...rows },
        responseMessages.updateProductCategorySuccessfully
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.deleteProductCategory = async (req, res) => {
  try {
    const productCategorySchema = Joi.object({
      productCategoryID: Joi.number().required(),
    });
    try {
      await productCategorySchema.validateAsync(req.params);
      const resp = await deleteProductCategorySP(req.params.productCategoryID);
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Deleted Product Category"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
module.exports.getProductByCategory = async (req, res) => {
  try {
    const productCategorySchema = Joi.object({
      productCategoryID: Joi.number().required(),
    });
    try {
      await productCategorySchema.validateAsync(req.params);
      const resp = await query(
        getProductByCategoryQuery(req.params.productCategoryID)
      );
      const rows = mysqlResponseHandler(resp);
      responseHandler.successResponse(
        res,

        [...rows],

        "Successfully Product By Category"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.addProduct = async (req, res) => {
  try {
    const productSchema = Joi.object({
      productName: Joi.string().required(),
      productCode: Joi.string().required(),
      productCategory: Joi.number().required(),
      // brand: Joi.number().required(),
      // productQty: Joi.number().required(),
      productCost: Joi.string().required(),
    });
    try {
      await productSchema.validateAsync(req.body);
      const resp = await addProductSP(req.body, req.user.storeID);
      responseHandler.successResponse(res, responseMessages.addProduct);
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

exports.getProduct = async (req, res) => {
  try {
    const productSchema = Joi.object({
      searchText: Joi.string().allow(""),
    });

    try {
      await productSchema.validateAsync(req.body);
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
      return false;
    }

    const resp = await query(
      getProductQuery(req.body.searchText, req.user.storeID)
    );
    let list = mysqlResponseHandler(resp);
    responseHandler.successResponse(
      res,
      list,
      responseMessages.getProductCategorySuccessfully
    );
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const productSchema = Joi.object({
      productID: Joi.number().required(),
      productName: Joi.string().required(),
      productCode: Joi.string().required(),
      productCategory: Joi.number().required(),
      // brand: Joi.number().required(),
      // productQty: Joi.number().required(),
      productCost: Joi.string().required(),
    });
    try {
      await productSchema.validateAsync(req.body);
      const resp = await updateProductSP(req.body, req.user.storeID);
      responseHandler.successResponse(res, responseMessages.updateProduct);
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const productSchema = Joi.object({
      productID: Joi.number().required(),
    });
    try {
      await productSchema.validateAsync(req.params);
      const resp = await query(deleteProductQuery(req.params.productID));
      const rows = mysqlSingleResponseHandler(resp);
      responseHandler.successResponse(
        res,
        {
          ...rows,
        },
        "Successfully Deleted Product"
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
