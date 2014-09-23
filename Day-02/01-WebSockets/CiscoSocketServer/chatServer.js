var nodeJsWebSocket = require("nodejs-websocket");
var server = nodeJsWebSocket.createServer(function(conn){
    conn.on("text",function(msg){
       console.log("msg received - ", msg);
        server.connections.forEach(function(con){
           con.sendText(msg); 
        });
    });
}).listen(9090);
console.log("server listening on port 9090!");