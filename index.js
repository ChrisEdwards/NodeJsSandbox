var server = require("./server");
var router = require("./router");

server.start(router.route);

console.log("Server started using ip " + process.env.IP + " and port " + process.env.PORT );