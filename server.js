const WebSocket = require('ws');
var express = require('express');
var app = express();
const path = require('path');
//setting middleware
app.use(express.static('frontend/build'));

// Express serve up index.html file if it doesn't recognize route

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});
// app.use(express.static(__dirname + 'frontend/public/')); //Serves resources from public folder


var server = app.listen(process.env.PORT || 5000);

var host = location.origin.replace(/^http/, 'ws');
host = host + ":3030";
const wss = new WebSocket.Server(host);

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