const WebSocket = require('ws');
var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname + 'frontend/public')); //Serves resources from public folder


var server = app.listen(5000);
const wss = new WebSocket.Server({ port: 3030 });

wss.on('connection', function connection(ws) {
  console.log("connected");
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
      }
    });
  });
});