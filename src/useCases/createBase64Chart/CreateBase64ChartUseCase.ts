import { ChartConfiguration } from "chart.js";
import { ChartCallback, ChartJSNodeCanvas, ChartJSNodeCanvasOptions } from "chartjs-node-canvas";

interface IRequest {
    chartOptions: ChartConfiguration;
}

class CreateBase64ChartUseCase {
    async execute({chartOptions}: IRequest): Promise<string> {
        const width = 400;
        const height = 400;
        const chartCallback:ChartCallback = (ChartJS) => {

        };
        const options: ChartJSNodeCanvasOptions = {
            width,
            height,
            chartCallback,
            plugins: {
                globalVariableLegacy: ['chartjs-adapter-date-fns' ]
            },
        }
    
        const chartJSNodeCanvas = new ChartJSNodeCanvas(options);

        const response = await (async () => {
            const configuration = chartOptions;
            const dataUrl = await chartJSNodeCanvas.renderToDataURL(configuration);

            return dataUrl;
        })();

        return response;
    }
}


export { CreateBase64ChartUseCase };