const Joi = require('joi');
const { query } = require('../../helper/executequery');
const { responseHandler } = require('../../utilities');
const { responseMessages } = require("../../utilities/messages");
const { mysqlSingleResponseHandler, mysqlResponseHandler } = require("../../utilities/utility");
const { addProductCategoryQuery,getProductCategoryQuery, updateProductCategoryQuery, deleteProductCategoryQuery } = require("../query/product.query");

module.exports.addProductCategory = async (req, res) => {
    try {
        const productCategorySchema = Joi.object({
            productCategoryName: Joi.string().required(),
            
        });
        try {
            await productCategorySchema.validateAsync(req.body);
            const resp = await query(addProductCategoryQuery(req.body.productCategoryName));       
            const rows = mysqlSingleResponseHandler(resp);
            responseHandler.successResponse(
                res, {
                ...rows,
            },
                'Successfully Added Product Category'
            );
        } catch (err) {
            responseHandler.errorResponse(res, err.message, err.message);
        }
    } catch (err) {
        responseHandler.errorResponse(res, err.message, commonErrorMessage);
    }
};

module.exports.getProductCategory = async (req, res) => {
    try {
        const resp = await query(getProductCategoryQuery);
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
            productCategoryID: Joi.number().required()
        });
        try {
            await productCategorySchema.validateAsync(req.body);
            const resp = await query(updateProductCategoryQuery(req.body.productCategoryName, req.body.productCategoryID));       
            const rows = mysqlSingleResponseHandler(resp);
            responseHandler.successResponse(
                res,
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
            await productCategorySchema.validateAsync(req.body);
            const resp = await query(deleteProductCategoryQuery(req.body.productCategoryID));       
            const rows = mysqlSingleResponseHandler(resp);
            responseHandler.successResponse(
                res, {
                ...rows,
            },
                'Successfully Deleted Product Category'
            );
        } catch (err) {
            responseHandler.errorResponse(res, err.message, err.message);
        }
    } catch (err) {
        responseHandler.errorResponse(res, err.message, commonErrorMessage);
    }
};