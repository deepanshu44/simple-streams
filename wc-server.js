const WebSocket = require("ws");

const server = new WebSocket.Server({
  port: 8099,
});
// let sockets = [];
server.on("connection", (socket) => {
  socket.on("message", (m) => console.log(`hello got a message ${m}`));
  console.log("hello, nice connected");
  socket.on("close", () => console.log("conn closed"));
});
server.on("close", () => console.log("conn closed"));
