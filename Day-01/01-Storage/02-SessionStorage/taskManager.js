
        window.addEventListener("DOMContentLoaded", init);
        window.addEventListener("storage",onStorageChange);
        var taskStorage = getTaskStorage();
        function onStorageChange(evtArg){
            console.dir(evtArg);
            document.getElementById("olTaskList").innerHTML = "";
            loadTasksFromStorage();
        }
        function init(){
            document.getElementById("btnAdd").addEventListener("click",onBtnAddClick);
            document.getElementById("btnRemoveCompleted").addEventListener("click",onBtnRemoveCompletedClick);
            loadTasksFromStorage();
        }
        function loadTasksFromStorage(){
            var tasks = taskStorage.getAll();
            for(var i=0;i<tasks.length;i++)
                addTaskToList(tasks[i]);
        }
        function onBtnAddClick(){
            var taskName = document.getElementById("txtTask").value;
            var task = taskStorage.add(taskName);
            addTaskToList(task);
        }
        function addTaskToList(task){
            var newTaskElement = document.createElement("li");
            newTaskElement.addEventListener("click", onTaskItemClick);
            newTaskElement.innerHTML = task.name;
            newTaskElement.setAttribute("task-id",task.id);
            if (task.isCompleted)
                newTaskElement.classList.add("completed");
            document.getElementById("olTaskList").appendChild(newTaskElement);
        }
        
        function onTaskItemClick(){
            this.classList.toggle("completed");
            taskStorage.toggleCompletion(this.getAttribute("task-id"));
        }
       
        function onBtnRemoveCompletedClick(){
            var taskList = document.getElementById("olTaskList").children;
            for(var i=taskList.length-1;i>=0;i--)
                if (taskList[i].classList.contains("completed")){
                    taskStorage.remove(taskList[i].getAttribute("task-id"));
                    taskList[i].remove();
                }
        }