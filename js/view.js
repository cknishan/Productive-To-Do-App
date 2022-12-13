"use strict"

/**
 * displayTasks Function
 */

// Check if data available in LS before continuing
if (checkLocalStorageData(STORAGE_KEY)) {
    // If data exists, retrieve it
    let data = getDataLocalStorage(STORAGE_KEY);
    // Restore data into tasks
    Tasks.fromData(data);
}


// display appointment
function displayTasks() {
    console.log(Tasks)
    for (let i = 0; i < Tasks.taskList.length; i++) {

        // create task htmls
        let newTaskHTML = `
    <div class="task" >
    <div class="taskTextDiv">${Tasks.taskList[i].name}</div>
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
    }

}

displayTasks()

// referencing
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
        console.log(objIdx)
        Tasks.removeTask(objIdx)

        taskElement.remove()

        // update the data to local storage
        updateLocalStorage(STORAGE_KEY, Tasks)

        console.log("createTasks.js delete", Tasks.taskList, localStorage)  //***debugging***()
        console.log("==================================")

    })
}

