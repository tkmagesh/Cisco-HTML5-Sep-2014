console.log("worker loaded");
function doWork(){
    for(var i=0;i<10000;i++){
        for(var k=0;k<10000;k++)
            for(var j = 0;j<100;j++)
            {}
        if (i % 100 === 0){
            self.postMessage({
                type : "progress",
                percentCompleted : i/100
            });
        }
    }
}

self.addEventListener("message",function(msgEvtArg){
    if (msgEvtArg.data === "start"){
        doWork();
        self.postMessage({type : "completion"});
    }
});
