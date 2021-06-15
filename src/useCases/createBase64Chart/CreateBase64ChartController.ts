import { Request, Response } from "express";
import { CreateBase64ChartUseCase } from "./CreateBase64ChartUseCase";
import { ChartJSNodeCanvas } from "chartjs-node-canvas";


class CreateBase64ChartController {
    constructor(private createBase64ChartUseCase: CreateBase64ChartUseCase){}

    async handle (request: Request, response: Response) : Promise<Response> {
        const { chart: chartOptions } = request.body;

        const response64 = await this.createBase64ChartUseCase.execute({chartOptions});
        
        return response.status(201).json({chart: response64})
    }
}

export {CreateBase64ChartController};