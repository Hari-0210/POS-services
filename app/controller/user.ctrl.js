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
const { login, getUser, getUserQuery } = require("../query/user.query");
const { addUserSP } = require("../services/user.services");

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
      if (!Object.keys(rows).length) {
        responseHandler.errorResponse(
          res,
          responseMessages.userNotFound,
          responseMessages.userNotFound
        );
        return false;
      }
      await verifyPassword(req.body.password, rows.password);
      responseHandler.successResponse(
        res,
        {
          token: generateToken(rows.userName),
          ...rows,
        },
        "Successfully Login"
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
    });
    try {
      await loginSchema.validateAsync(req.body);
      var pass;
      pass = req.body.password;
      req.body.password = await passwordHash(req.body.password);
      req.body.roleID = 2;
      const resp = await addUserSP(req.body);
      console.log(resp);
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

module.exports.getUser = async (req, res) => {
  try {
    const resp = await query(getUserQuery);
    let list = mysqlResponseHandler(resp);

    responseHandler.successResponse(res, list, responseMessages.getUser);
  } catch (err) {
    responseHandler.errorResponse(res, err.message, commonErrorMessage);
  }
};
