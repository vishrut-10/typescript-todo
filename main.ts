interface ITODOList {
    todo: string;
    status: string;
    id: number;
}

class TODOList {
    public todoList: ITODOList [];

    constructor(){
        this.todoList=[];
    }

    addTodo(todo_list : ITODOList) {
        this.todoList.push(todo_list);
    }

    displayTodo() {
        window.console.log(this.todoList);
    }
}

var todo1: ITODOList={todo : "Do Assignment on Todo App",status : "ACTIVE", id: 0};
var todo2: ITODOList={todo: "Learn Angular", status: "ACTIVE", id: 1};

var todo_list = new TODOList();
todo_list.addTodo(todo1);
todo_list.addTodo(todo2);

function addTodoItem(todo: ITODOList) {
    todo_list.addTodo(todo);
}

function displayActiveTodoItem() {
    console.log(todo_list.todoList);
    todo_list.displayTodo();

    for (var i = 0; i < todo_list.todoList.length; i++) {
        console.log(todo_list.todoList[i]);

        if (todo_list.todoList[i].status == "ACTIVE") {
            var node = document.createElement("span");
            var s = (todo_list.todoList[i].id+1) + ". " + todo_list.todoList[i].todo;
            var text = document.createTextNode(s);
            node.appendChild(text);

            var completebtn = document.createElement("button");
            text = document.createTextNode("COMPLETE");
            completebtn.appendChild(text);
            completebtn.setAttribute("id", "completebtn");
            completebtn.setAttribute("onclick", "completeTodo("+i+")");
            completebtn.setAttribute("class", "completebtnclass");
            node.appendChild(completebtn);

            var deletebtn = document.createElement("button");
            text = document.createTextNode("DELETE");
            deletebtn.appendChild(text);
            deletebtn.setAttribute("id", "deletebtn");
            deletebtn.setAttribute("onclick", "deleteTodo("+i+")");
            node.appendChild(deletebtn);

            var newLine = document.createElement("br");

            document.getElementById("activetodos").appendChild(node);
            document.getElementById("activetodos").appendChild(newLine);
        }
    }
}

function completeTodo(id: number) {
    console.log(id);
    for (var i = 0; i < todo_list.todoList.length; i++) {
        if (todo_list.todoList[i].id == id) {
            todo_list.todoList[i].status = "COMPLETE";
        }
    }
    document.getElementById("activetodos").innerHTML = "";
    displayActiveTodoItem();
    document.getElementById("completedtodos").innerHTML = "";
    displayCompleteTodo();
}

function deleteTodo(id: number) {
    console.log(id);
    for (var i = 0; i < todo_list.todoList.length; i++) {
        if (todo_list.todoList[i].id == id) {
            todo_list.todoList[i].status = "DELETE";
        }
    }
    document.getElementById("activetodos").innerHTML = "";
    displayActiveTodoItem();
    document.getElementById("completedtodos").innerHTML = "";
    displayCompleteTodo();
    document.getElementById("deletedtodos").innerHTML = "";
    displayDeleteTodo();
}

function displayCompleteTodo() {
    for (var i = 0; i < todo_list.todoList.length; i++) {
        if (todo_list.todoList[i].status == "COMPLETE") {
            var node = document.createElement("LI");
            var text = document.createTextNode(todo_list.todoList[i].todo);
            node.appendChild(text);

            document.getElementById("completedtodos").appendChild(node);
        }
    }
}

function displayDeleteTodo() {
    for (var i = 0; i < todo_list.todoList.length; i++) {
        if (todo_list.todoList[i].status == "DELETE") {
            var node = document.createElement("LI");
            var text = document.createTextNode(todo_list.todoList[i].todo);
            node.appendChild(text);

            document.getElementById("deletedtodos").appendChild(node);
        }
    }
}


