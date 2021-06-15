import { Router } from "express";
import { chartsRoutes } from "./charts.routes";

const routes = Router();

routes.use("/charts", chartsRoutes);

export { routes };