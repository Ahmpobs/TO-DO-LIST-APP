function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function () {
    li.classList.toggle("done");
  };

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(removeBtn);
  document.getElementById("task-list").appendChild(li);

  input.value = "";
}
