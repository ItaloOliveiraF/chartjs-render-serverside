const graphs = {} 
const N = msg.payload.length

function offsetDate(timestamp){
    let date = new Date(timestamp)
    return date
}

msg.variables.forEach((variable) => {
    const data = msg.payload[variable] ? msg.payload[variable].map(item => item[1]): []
    graphs[variable] = {
        chart: {
            type: "line",
            data: {
                labels: msg.payload[variable] ? msg.payload[variable].map(item => offsetDate(item[0])) : [],
                datasets: [
                    {
                        label: msg.graphsConfigs[variable].labelY ,
                        data: data,
                        borderColor: ["rgb(54, 162, 235)"],
                        borderWidth: 2,
                        fill: "origin"
                    }
                ]
            },
            options: {
                elements: {
                  point: {
                      radius: 0
                  }  
                },
                
                scales: {
                    x: {
                        type: 'time',
                        displayFormats: {
                            minute: 'h:mm a',
                        },
                    },
                    y: {
                        labels: msg.graphsConfigs[variable].labelY,
                        suggestedMax: msg.graphsConfigs[variable].rangeY.max,
                        suggestedMin: msg.graphsConfigs[variable].rangeY.min,
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: msg.graphsConfigs[variable].title
                    },
                    legend: {
                        display: false
                    }
                },
            
            },
        }
    }
})

return {
    payload: graphs
};