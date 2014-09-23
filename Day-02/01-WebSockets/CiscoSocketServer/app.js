var nodejsWebsocket = require("nodejs-websocket");
var server = nodejsWebsocket.createServer(function(conn){
    console.log("A new connection is established");
    var count = 0;
    var timer = setInterval(function(){
        conn.sendText(new Date().toString());
        if (++count >= 10){
            clearInterval(timer);
        }
    },10000)
});
server.listen(9090);
console.log("socket server listening on port 9090!!");
