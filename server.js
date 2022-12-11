require("dotenv").config();
const configs = require("./config");
for (const config in configs) {
  process.env[config] = configs[config];
}

// console.log(process.env[space])
global.appRoot = require("path").resolve(__dirname);

const server = require("./express")();
const { port = 5500 } = require("./config");
const { db } = require("./config/mysqldb");
server.listen(port, async () => {
  console.log("\x1b[36m%s\x1b[0m", `server is 🏃‍♂️ at http://localhost:${port}`);
  console.log("\x1b[36m%s\x1b[0m", `API's docs http://localhost:${port}/docs`);
  console.log("\x1b[36m%s\x1b[0m", `Please update api doc`);
  console.log("DB connecting .....");
  await db();
});
