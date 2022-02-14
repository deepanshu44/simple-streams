const WebSocket = require("ws");
const client = new WebSocket("ws://localhost:8099");
const stream = WebSocket.createWebSocketStream(client);
client.on("open", () => {
  //====>>
  stream.pipe(process.stdout);
});
