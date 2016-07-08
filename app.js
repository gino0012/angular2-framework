"use strict";
/// <reference path="./typings/browser.d.ts" />
var _server = require('./backend/Server');
var server = new _server.Server();
server.startServer();