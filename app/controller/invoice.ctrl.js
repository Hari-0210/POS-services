const Joi = require("joi");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");
const {
  mysqlSingleResponseHandler,
  mysqlResponseHandler,
} = require("../../utilities/utility");
const { addInvoiceQuery, getInvoiceQuery, updateInvoiceQuery, deleteInvoiceQuery } = require("../query/invoice.query");


module.exports.addInvoice = async (req, res) => {
    try {
      const productsSchema = Joi.object().keys({
        productName: Joi.string().required(),
        productCost: Joi.string().required(),
        productQty: Joi.number().required(),
      });
      const invoiceSchema = Joi.object({
        invoiceNumber: Joi.string().required(),
        invoiceDate: Joi.string().required(),
        state: Joi.string().required(),
        customerName: Joi.string().required(),
        customerMobile: Joi.string().required(),
        customerAddress: Joi.string().required(),
        gst: Joi.string().required(),
        email: Joi.string().required(),
        totalNoofProducts: Joi.number().required(),
        subTotal: Joi.string().required(),
        SGST: Joi.number().required(),
        CGST: Joi.number().required(),
        IGST: Joi.number().required(),
        total: Joi.string().required(),
        products: Joi.array().items(productsSchema),
      });
  
      try {
        await invoiceSchema.validateAsync(req.body);
        const resp = await query(addInvoiceQuery(req.body, req.user.storeID));
        const rows = mysqlSingleResponseHandler(resp);
        responseHandler.successResponse(
          res,
          {
            ...rows,
          },
          "Successfully Invoice Added"
        );
      } catch (err) {
        responseHandler.errorResponse(res, err.message, err.message);
      }
    } catch (err) {
      responseHandler.errorResponse(res, err.message, commonErrorMessage);
    }
  };

  module.exports.getInvoice = async (req, res) => {
    try {
      const resp = await query(getInvoiceQuery(req.user.storeID));
  
      let list = mysqlResponseHandler(resp);
  
      responseHandler.successResponse(res, list, responseMessages.getInvoice);
    } catch (err) {
      responseHandler.errorResponse(res, err.message, commonErrorMessage);
    }
  };


  module.exports.updateInvoice = async (req, res) => {
    try {
      const productsSchema = Joi.object().keys({
        productName: Joi.string().required(),
        productCost: Joi.string().required(),
        productQty: Joi.number().required(),
      });
      const invoiceSchema = Joi.object({
        invoiceMasterID: Joi.number().required(),
        invoiceNumber: Joi.string().required(),
        invoiceDate: Joi.string().required(),
        state: Joi.string().required(),
        customerName: Joi.string().required(),
        customerMobile: Joi.string().required(),
        customerAddress: Joi.string().required(),
        gst: Joi.string().required(),
        email: Joi.string().required(),
        totalNoofProducts: Joi.number().required(),
        subTotal: Joi.string().required(),
        SGST: Joi.number().required(),
        CGST: Joi.number().required(),
        IGST: Joi.number().required(),
        total: Joi.string().required(),
        products: Joi.array().items(productsSchema),
      });
  
      try {
        await invoiceSchema.validateAsync(req.body);
        const resp = await query(updateInvoiceQuery(req.body));
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
  
  module.exports.deleteInvoice = async (req, res) => {
    try {
      const invoiceSchema = Joi.object({
        invoiceMasterID: Joi.number().required(),
      });
      try {
        await invoiceSchema.validateAsync(req.params);
        const resp = await query(deleteInvoiceQuery(req.params.invoiceMasterID));
        const rows = mysqlSingleResponseHandler(resp);
        responseHandler.successResponse(
          res,
          {
            ...rows,
          },
          "Invoice Deleted Successfully"
        );
      } catch (err) {
        responseHandler.errorResponse(res, err.message, err.message);
      }
    } catch (err) {
      responseHandler.errorResponse(res, err.message, commonErrorMessage);
    }
  };