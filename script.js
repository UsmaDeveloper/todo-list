  let taskList = document.getElementById("taskList");
    let input = document.getElementById("taskInput");
    let addBtn = document.getElementById("addBtn");

    let editIndex = null; // track which task is being edited

    function addTask() {
      let taskText = input.value.trim();
      if (taskText === "") return;

      if (editIndex === null) {
        // Add new task
        let li = document.createElement("li");
        li.innerHTML = `
          <span>${taskText}</span>
          <div class="btns">
            <button class="edit" onclick="startEdit(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
          </div>
        `;
        taskList.appendChild(li);
      } else {
        // Update existing task
        let li = taskList.children[editIndex];
        li.querySelector("span").innerText = taskText;
        editIndex = null;
        addBtn.innerText = "Add"; // back to Add mode
      }

      input.value = "";
    }

    function deleteTask(btn) {
      btn.parentElement.parentElement.remove();
      editIndex = null;
      addBtn.innerText = "Add";
      input.value = "";
    }

    function startEdit(btn) {
      let li = btn.parentElement.parentElement;
      input.value = li.querySelector("span").innerText; // put text back into input
      editIndex = Array.from(taskList.children).indexOf(li);
      addBtn.innerText = "Update"; // change button text
    }