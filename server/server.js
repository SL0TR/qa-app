﻿/**
 * Module dependencies.
 */

const debug = require("debug")("WebTemplateStudioExpress:server");
const http = require("http");
const app = require("./app");
const config = require('./config/config');
const utils = require('./utils');
const logger = require('./utils/logger');

// connect to mongodb on mlab.
require('mongoose').set('useCreateIndex', true);
require('mongoose').connect(config.db.url, { useNewUrlParser: true }, err => {
  if(err) {
      logger.error('Some problem with the connection: ' +err);
  } else {
      logger.log('The Mongoose connection is ready!');
  }
});

/**
 * Get port from environment and store in Express.
 */

const port = utils.normalizePort(config.port);
app.set("port", port);
/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
logger.log('listening on http://localhost:' + port);
server.on("error", onError);
server.on("listening", onListening);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
}
