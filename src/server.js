const express = require("express");
const setMiddlewares = require("./middlewares/setMiddlewares");
const { errorResponse } = require("./utils");

const app = express();
const cookieParser = require("cookie-parser");


setMiddlewares(app);

app.use(require("./api/v1/routes"));
app.use(cookieParser());

app.use("*", (req, res) => {
  errorResponse(res, 400, "Syntax error. Check your path or syntax");
});

//err indicates to express that this is an error middleware. Fascinating.
app.use((err, req, res, next) => {
  const { statusCode, message } = err;
  errorResponse(res, statusCode, message);
});

module.exports = app;