//TodoApp::

let todo = [];
let req  = prompt("please enter your request");
while(true){
    if(req == "quit"){
        console.log("quitting app");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        break;
    }
    if(req == "list"){
        console.log("---------------");
        for(task of todo){
            console.log(task); 
        }
        console.log("---------------");
    }else if(req == "add"){
         let task = prompt("please enter the task you want to add");
         todo.push(task);
         console.log("task added");
    } else if(req == "delete"){
        let index =prompt("please enter the tast index");
        todo.splice(index, 1);
        console.log("tast deleted");
    }
    req  = prompt("please enter your request");
}

HTML CODE FOR TO DO::

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src = todoapp.js></script>
</head>
<body>
    <h1>Todo App</h1> 
    <h3>Enter "list" to show all tasks</h3>
    <h3>Enter "add" to add a task</h3>
    <h3>Enter "delete"to  remove a tasks</h3>
    <h3>Enter "quit" to quit todo</h3>
    
</body>
</html>
