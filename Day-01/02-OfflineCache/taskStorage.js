function getTaskStorage(){
        var windowStorage = window.localStorage;
             function addTaskToStorage(taskName){
                var newId = new Date().getTime().toString();
                var newTask = { 
                    id : newId,
                    name : taskName,
                    isCompleted : false
                }
                windowStorage.setItem(newId, window.JSON.stringify(newTask));
                return newTask;
            }
            function toggleCompletionInStorage(taskId){
                var task = window.JSON.parse(windowStorage.getItem(taskId));
                task.isCompleted = !task.isCompleted;
                windowStorage.setItem(task.id, window.JSON.stringify(task));
            }
            function removeTaskFromStorage(taskId){
                windowStorage.removeItem(taskId);
            }
            function getAllTasksFromStorage(){
                var result = [];
                for(var i=0;i<windowStorage.length;i++){
                    var key = windowStorage.key(i);
                    var task = window.JSON.parse(windowStorage.getItem(key));
                    result.push(task);
                }
                return result;
            }
            return {
                add : addTaskToStorage,
                remove : removeTaskFromStorage,
                getAll : getAllTasksFromStorage,
                toggleCompletion : toggleCompletionInStorage
            }
            
        }