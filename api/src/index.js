const express = require('express');
const app = express();
const WebSocketServer = require('ws').Server;
const wsServer = new WebSocketServer({port: 8181});

wsServer.on('connection', ws => {
    console.log('WS connection was detected');
    const generateRandomFloat = (min, max) => Number((Math.random()*(max-min) + min).toFixed(2));

    const updateStockRandomly = () => {
        Object.keys(stocks).map(key => stocks[key] += generateRandomFloat(-100,100));
        ws.send(JSON.stringify(stocks));
        setTimeout(updateStockRandomly, generateRandomFloat(10,90)*100)
    };
    
    updateStockRandomly();
});

const stocks = {
    GOOG: 550.23,
    AAPL: 100.52,
    MSFT: 50.36,
    AMZN: 470.25
};




app.get('/', (req,res) => {
    res.json(stocks);
});

app.listen(5000, () => {
    console.log("Server has been started...");
});