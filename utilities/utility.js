const moment = require("moment");

exports.mysqlResponseHandler = function (records) {
  let rows = [];
  if (records && records.recordsets && records.recordsets.length) {
    rows = records.recordsets;
  }
  return rows;
};
exports.mysqlSingleResponseHandler = function (records) {
  let rows = [];
  if (records && records.recordset && records.recordset.length) {
    rows = records.recordset;
  }
  return rows;
};
exports.mysqlSingleObjResponseHandler = function (records) {
  let rows;
  if (records && records.recordset && records.recordset.length) {
    rows = records.recordset[0];
  }
  return rows;
};
