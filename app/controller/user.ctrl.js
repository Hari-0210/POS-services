const {
  mysqlResponseHandler,
  mysqlSingleResponseHandler,
  mysqlSingleObjResponseHandler,
  parseSqlResult,
} = require("../../utilities/utility");
const { responseMessages } = require("../../utilities/messages");
const { generateToken, jwtDecode } = require("../../helper/jwtToken");
const { passwordHash, verifyPassword } = require("../../helper/bcryptPassword");
const Joi = require("joi");
const moment = require("moment");
const { query } = require("../../helper/executequery");
const { responseHandler } = require("../../utilities");
const { login, getUser, getUserQuery, checkStore } = require("../query/user.query");
const { addUserSP, updateUserSP } = require("../services/user.services");

module.exports.login = async (req, res) => {
  try {
    const loginSchema = Joi.object({
      userName: Joi.string().required(),
      password: Joi.string().required(),
    });
    try {
      await loginSchema.validateAsync(req.body);
      const resp = await query(login(req.body.userName));
      const rows = mysqlSingleResponseHandler(resp);
     console.log(rows);
      let checkStoreActive = await query(checkStore(rows.storeID));
      checkStoreActive = mysqlSingleResponseHandler(checkStoreActive)
      if (checkStoreActive.isActive === 1) {
        responseHandler.errorResponse(
          res,
          responseMessages.storeActive,
          responseMessages.storeActive
        );
        return false;
      }
      if (!Object.keys(rows).length) {
        responseHandler.errorResponse(
          res,
          responseMessages.userNotFound,
          responseMessages.userNotFound
        );
        return false;
      }
      await verifyPassword(req.body.password, rows.password);
      // console.log(rows);
      delete rows.jwt
      let newToken = generateToken(rows)
      responseHandler.successResponse(
        res,
        {
          token: newToken,
          ...rows,
        },
        "Successfully Login"
      );
      await query(
        `Update userDetails set jwt ='${newToken}' where userID = ${rows.userID}`
      );
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.addUser = async (req, res) => {
  try {
    const loginSchema = Joi.object({
      userName: Joi.string().required(),
      password: Joi.string().required(),
      storeID: Joi.number().required(),
    });
    try {
      await loginSchema.validateAsync(req.body);
      var pass;
      pass = req.body.password;
      req.body.pass =pass;
      req.body.password = await passwordHash(req.body.password);
      req.body.roleID = 2;
      const resp = await addUserSP(req.body);
      const user = await query(
        `select * from userDetails where userName = '${req.body.userName}'`
      );
     
      responseHandler.successResponse(res, user, "Successfully added");
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const loginSchema = Joi.object({
      userID: Joi.number().required(),
      userName: Joi.string().required(),
      password: Joi.string().required(),
      storeID: Joi.number().required(),
    });
    try {
      await loginSchema.validateAsync(req.body);
      var pass;
      pass = req.body.password;
      req.body.pass =pass;
      req.body.password = await passwordHash(req.body.password);
      req.body.roleID = 2;
      const resp = await updateUserSP(req.body);
      
      responseHandler.successResponse(res, resp, "Successfully added");
    } catch (err) {
      responseHandler.errorResponse(res, err.message, err.message);
    }
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const resp = await query(getUserQuery(req.user.storeID));
    let list = mysqlResponseHandler(resp);

    responseHandler.successResponse(res, list, responseMessages.getUser);
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
