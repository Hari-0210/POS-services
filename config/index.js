const dbConfig = require("./general");
const env = () => {
  return {
    saltRounds: 10,
    jwtPrivateKey: "gibigo",
    endpoint: "/api/v1",
    port: 8500,
    mySQLconfig: {
      host: dbConfig.host,
      port: dbConfig.port,
      database: dbConfig.database,
      user: dbConfig.user,
      password: dbConfig.password,
    },
  };
};
module.exports = {
  ...env(),
  noAuthRequired: ["/api/v1/login", "/api/v1/test"],
};
