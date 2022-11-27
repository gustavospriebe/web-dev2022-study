const input = document.querySelector(".input-task");
const newTask = document.querySelector(".new-task");
const taskCreated = document.querySelector(".task-created");
const completeTask = document.querySelector(".complete-task");

function createNewTask() {
    const div = document.createElement("div");

    if (input.value == "") {
        alert("Please Enter a Task");
    } else {
        div.classList.add("task");

        const p = document.createElement("p");
        p.innerText = input.value;

        const btnComplete = document.createElement("button");
        btnComplete.innerText = "Complete";
        btnComplete.classList.add("complete-task");

        const btnDelete = document.createElement("button");
        btnDelete.innerText = "Delete";
        btnDelete.classList.add("delete-task");

        taskCreated.appendChild(div);
        div.appendChild(p);
        div.appendChild(btnComplete);
        div.appendChild(btnDelete);

        input.value = "";

        btnDelete.addEventListener("click", () => {
            btnDelete.parentElement.remove();
        });

        btnComplete.addEventListener("click", () => {
            p.classList.toggle("line-through");
        });
    }
}

newTask.addEventListener("click", createNewTask);

// complete usar toggle com classe riscando task no meio
