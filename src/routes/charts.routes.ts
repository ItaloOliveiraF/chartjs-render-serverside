import { Router } from "express";

import { CreateBase64ChartUseCase } from "../useCases/createBase64Chart/CreateBase64ChartUseCase"; 
import { CreateBase64ChartController } from "../useCases/createBase64Chart/CreateBase64ChartController";

const createBase64ChartUseCase = new CreateBase64ChartUseCase();
const createBase64ChartController = new CreateBase64ChartController(createBase64ChartUseCase);

const chartsRoutes = Router();

chartsRoutes.post("/", async (req, res) => {
    await createBase64ChartController.handle(req, res)
});

export { chartsRoutes };