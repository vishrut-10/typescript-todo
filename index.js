window.onload = function() {
    var input_todo = document.getElementById('inp');
    var addbtn = document.getElementById('addbtn');
    displayActiveTodoItem();

    addbtn.onclick = function() {
        var value = input_todo.value;
        var y = todo_list.todoList.length;
        var x = {todo: value, status: "ACTIVE", id: y};
        addTodoItem(x);
        document.getElementById("activetodos").innerHTML = "";
        document.getElementById("inp").value = "";
        displayActiveTodoItem();
    }

    var updatebtn = document.getElementById("updatebtn");

    updatebtn.onclick = function () {
        var id = document.getElementById("todoid").value;
        var editedtodo = document.getElementById("edit").value;

        for (var i = 0; i < todo_list.todoList.length; i++) {
            if (todo_list.todoList[i].id == id-1 && todo_list.todoList[i].status == "ACTIVE") {
                todo_list.todoList[i].todo = editedtodo;
            }
        }

        document.getElementById("activetodos").innerHTML = "";
        document.getElementById("completedtodos").innerHTML = "";
        document.getElementById("todoid").value = "";
        document.getElementById("edit").value = "";

        displayActiveTodoItem();
        displayCompleteTodo();
    }
};