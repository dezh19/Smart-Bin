$(document).ready(function () {
    // Calender
    $("#datetimepicker").datetimepicker({
      inline: true,
      disablePast: true,
      format: "L",
    });
  
    $(document).on("input", "#datetimepicker", function (e) {
      console.log(e.target.value);
  
      schedulePickup("Pickup for: " + e.target.value);
      alert("Scheduled pickup for: " + e.target.value);
    });
  
    //Local Storage
    const LOCAL_STORAGE_TASKS_KEY = "tasks";
  
    function save() {
      localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
    }
  
    function saveAndDisplay() {
      save();
      display();
    }
  
    //Task Elements
    let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];
    const taskContainer = document.querySelector("[data-task-container]");
    const newTaskButton = document.querySelector("[data-new-task-button]");
    const newTaskInput = document.querySelector("[data-new-task-input]");
  
    // Remove tasks
    taskContainer.addEventListener("click", (event) => {
      event.composedPath().forEach((element) => {
        if (element.matches && element.matches("button#delete-task-button")) {
          const taskToDelete = element.parentNode.dataset.taskId;
          tasks = tasks.filter((task) => task.id !== taskToDelete);
        }
      });
      saveAndDisplay();
    });

    
    function display() {
      clearElement(taskContainer);
      displayTasks();
    }
  
    //Function to display tasks
    function displayTasks() {
      tasks.forEach((task) => {
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "delete-task-button");
        deleteButton.classList.add("btn", "btn-sm");
  
        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa", "fa-times");
  
        const taskElement = document.createElement("li");
        taskElement.classList.add(
          "d-flex",
          "align-items-center",
          "border-bottom",
          "py-2"
        );
  
        const taskElementContainer = document.createElement("div");
        taskElementContainer.classList.add(
          "d-flex",
          "w-100",
          "align-items-center",
          "justify-content-between"
        );
  
        const taskSpan = document.createElement("span");
  
        taskElementContainer.dataset.taskId = task.id;
        taskSpan.innerText = task.name;
  
        deleteButton.appendChild(deleteIcon);
  
        taskElementContainer.appendChild(taskSpan);
        taskElementContainer.appendChild(deleteButton);
  
        taskElement.appendChild(taskElementContainer);
  
        taskContainer.appendChild(taskElement);
      });
    }
  
    //Adding task
    newTaskButton.addEventListener("click", (event) => {
      event.preventDefault();
      const taskName = newTaskInput.value;
      if (taskName == null || taskName === "") return;
      const task = createTask(taskName);
      newTaskInput.value = "";
      tasks.push(task);
      saveAndDisplay();
    });
  
    function createTask(taskName) {
      return { id: JSON.stringify(Date.now()), name: taskName };
    }
  
    //Clear element
    function clearElement(element) {
      element.innerHTML = "";
    }
  
    // Schedule Pickup
    function schedulePickup(message) {
      const newPickup = createTask(message);
      tasks.push(newPickup);
      saveAndDisplay();
    }
  
    display();
  });
  