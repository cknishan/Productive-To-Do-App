"use strict"

// this js file contains the functionality for 
//  creating, deleting and checkmarking todo list

// reference to input and form
const task = document.querySelector("#task-input")
const taskForm = document.querySelector("#add-task")

// reference to todo tasks and completed section
const todoTasks = document.querySelector("#todoTasks")

/**
 * function add task 
 */
taskForm.addEventListener('submit', (e) => {
  e.preventDefault()

  // if the form input is not empty or whitespaces
  if (task.value.trim() != "") {

    // create new html
    let newTaskHTML = `
        <div class="task" >
        <div class="taskTextDiv">${task.value.trim()}</div>
        <div class="grid place-items-center">                
          <span>
            <!-- menu icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block menuIcon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>  
            <!-- trashcan icon -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block trashIcon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
        </span>
        </div>
        </div>
        `
    // add the html to the todoTasks section
    todoTasks.innerHTML += newTaskHTML

    // OOP: construct an object (Task) and add to another object (TaskList)
    let newTask = new Task(task.value.trim())
    Tasks.addTask(newTask)

    // update the data to local storage
    updateLocalStorage(STORAGE_KEY, Tasks)

  }
  task.value = ""

  // Create a nwe Global tasks variable because we will take the consistent data again fromt he local storage with the methods included
  Tasks = new TaskList();

  // Check if data available in LS before continuing
  if (checkLocalStorageData(STORAGE_KEY)) {
    // If data exists, retrieve it
    let data = getDataLocalStorage(STORAGE_KEY);
    // Restore data into tasks
    Tasks.fromData(data);
  }


  // everytime a new task is added 
  // the following reference and bindings needs to be updated as well

  let menuIcon = document.querySelectorAll(".menuIcon")
  let trashIcon = document.querySelectorAll(".trashIcon")
  let taskTextDiv = document.querySelectorAll(".taskTextDiv")

  // delete task functionality
  for (let idx = 0; idx < trashIcon.length; idx++) {
    let iconElement = trashIcon[idx]
    iconElement.addEventListener('click', (pointerEvent) => {
      let taskElement = iconElement.parentElement.parentElement.parentElement

      // console.log(idx, taskElement, Tasks.taskList[idx]) //***debugging***

      taskElement.remove()
      // taskElement.style.display = "none"
      Tasks.removeTask(idx)

      // update the data to local storage
      updateLocalStorage(STORAGE_KEY, Tasks)
      location.reload() // couldn't solve the inconsistent idx without it. uncomment the ***debugging*** for test after disabling the reload

      // console.log("createTasks.js delete", Tasks.taskList, localStorage)  //***debugging***()
      // console.log("==================================")

    })
  }


  // toggle completed tasks
  for (let idx = 0; idx < taskTextDiv.length; idx++) {
    let textDiv = taskTextDiv[idx]
    textDiv.addEventListener('click', () => {
      if (textDiv.classList.contains("taskCompleted")) {
        textDiv.classList.remove("taskCompleted")
        // Tasks[idx].completed(false)
      } else {
        textDiv.classList.add("taskCompleted")

        // doesnt work cuz no methods inside the taskList // works now :)
        console.log(Tasks.taskList[idx].name)

      }
    })
  }


  console.log(Tasks)
  console.log(localStorage)

})