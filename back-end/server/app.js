﻿const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const indexRouter = require("./api/index");
const auth = require('./auth/routes');
const config = require('./config/config');
const jwt = require('jsonwebtoken');
const app = express();
var cors = require('cors')

// SET SPECIFIC CORS WITH COOKE PARSING
app.use(cors({
  credentials: true,
  origin: config.frontendUrl
}));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.disable('etag');

// get token from request using a middleware and put it on req
app.use((req, res, next) => {
  const { token } = req.cookies;
  if(token) {
    const { userId, isAdmin } = jwt.verify(token, config.secrets.jwt);
    req.userId = userId;
    req.isAdmin = isAdmin;
  }
  next();
})

app.use("/api", indexRouter);
app.use('/api', auth);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// TODO Web Template Studio: Add your own error handler here.
if (process.env.NODE_ENV === "production") {
  // Do not send stack trace of error message when in production
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send("Error occurred while handling the request.");
  });
} else {
  // Log stack trace of error message while in development
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.send(err.message);
  });
}

module.exports = app;
