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
          <!-- star icon -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block starIcon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
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

  // delete task functionality
  for (let idx = 0; idx < trashIcon.length; idx++) {
    let iconElement = trashIcon[idx]
    iconElement.addEventListener('click', (pointerEvent) => {
      let taskTextDiv = iconElement.parentElement.parentElement
      let taskText = taskTextDiv.previousElementSibling.textContent
      let taskElement = taskTextDiv.parentElement

      // console.log(idx, taskElement, taskTextDiv.previousElementSibling.textContent, Tasks.taskList[idx]) //***debugging***

      // remove the task from Tasks object with the same name
      const objIdx = Tasks.taskList.findIndex((obj) => obj.name == taskText)
      // console.log(objIdx)
      Tasks.removeTask(objIdx)

      taskElement.remove()

      // update the data to local storage
      updateLocalStorage(STORAGE_KEY, Tasks)

      // console.log("createTasks.js delete", Tasks.taskList, localStorage)  //***debugging***()
      // console.log("==================================")

    })
  }


  // toggle completed tasks
  let taskTextDiv = document.querySelectorAll(".taskTextDiv")
  for (let idx = 0; idx < taskTextDiv.length; idx++) {
    let textDiv = taskTextDiv[idx]
    textDiv.addEventListener('click', () => {
      if (textDiv.classList.contains("taskCompleted")) {
        textDiv.classList.remove("taskCompleted")
        Tasks.taskList[idx].completed = false
      } else {
        textDiv.classList.add("taskCompleted")
        Tasks.taskList[idx].completed = true
      }
      updateLocalStorage(STORAGE_KEY, Tasks)
    })
  }

    // toggle starred tasks
    let starIcons = document.querySelectorAll(".starIcon")
    console.log(starIcons)
    for (let idx = 0; idx < starIcons.length; idx++) {
      let starIcon = starIcons[idx]
      starIcon.addEventListener('click', () => {
        // console.log(starIcon, starIcon.classList)
        if (starIcon.classList.contains("starred")) {
          starIcon.classList.remove("starred")
          Tasks.taskList[idx].important = false
        } else {
          starIcon.classList.add("starred")
          Tasks.taskList[idx].important = true
        }
        updateLocalStorage(STORAGE_KEY, Tasks)
      })
    }


})