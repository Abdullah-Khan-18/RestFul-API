const express = require("express");

//-----------   import    -----------//
require("./db/conn");
const OlympicDetail = require("./models/schema");
const router = require("./routers/router");

//-----------   create port environment     -----------//
const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(router);

//-----------   listen    -----------//
app.listen(port, () => {
  console.log("connection is setup at " + port);
});
