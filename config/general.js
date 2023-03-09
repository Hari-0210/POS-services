let dbConfig = {};
dbConfig = {
  host: "bom1plzcpnl493931.prod.bom1.secureserver.net",
  user: "GuruPOS",
  password: "GuruPOS",
  database: "POSDB_DEV"
};
let s3Bucket = '';
s3Bucket = 'gobigg/dev';
module.exports = {
  ...dbConfig,
  s3Bucket
};
