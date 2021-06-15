"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var charts_routes_1 = require("./charts.routes");
var routes = express_1.Router();
exports.routes = routes;
routes.use("/chart", charts_routes_1.chartsRoutes);
