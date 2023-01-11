const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const utilities = require("../utilities");
const { endpoint, port = 5500 } = require("../config");

const path = require("path");
const { isAuthenticated } = require("../helper/tokenVerify");
const routes = require("../app/routes");

module.exports = () => {
  for (const utility in utilities) {
    global[utility] = utilities[utility];
  }
  global["commonErrorMessage"] = "Something went wrong please try again";
  global.__basedir = __dirname + "/..";

  const app = express();
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
        <html>
        <head>
        <style>
        #customers {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        
        #customers td, #customers th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        
        #customers tr:nth-child(even){background-color: #f2f2f2;}
        
        #customers tr:hover {background-color: #ddd;}
        
        #customers th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #04AA6D;
          color: white;
        }
        </style>
        </head>
        <body>
        
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Url</th>
          </tr>
          <tr>
            <td>Host</td>
            <td><a href="http://localhost:${port}" target="_blank">http://localhost:${port}</a></td>
          </tr>
            <tr>
            <td>Doc</td>
            <td><a href="http://localhost:${port}/docs" target="_blank">http://localhost:${port}/docs</a></td>
          </tr>     
          <tr>
          <td>Server check</td>
          <td><a href="http://localhost:${port}${endpoint}/test" target="_blank">http://localhost:${port}${endpoint}/test</a></td>
        </tr>      
        </table>        
        </body>
        </html>
        `);
  });
  app.use(express.static(path.join(__dirname, "../docs")));
  app.get(`/docs`, function (req, res) {
    res.sendFile(path.join(__dirname, "../docs/index.html"));
  });

  app.use((error, request, response, next) => {
    if (error !== null) {
      logger.error(`express/index.js:line27 :: ${error.message}`);
      return response.json({ status: 403, message: "Invalid json" });
    }
    next();
  });
  // app.use(network)
  app.use(isAuthenticated);
  app.use(`/.netlify/functions/api${endpoint}`, routes);

  return app;
};
