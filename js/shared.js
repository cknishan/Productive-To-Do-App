"use strict";

const TASK_KEY = "currentTaskIndex";
const STORAGE_KEY = "TaskData";

/**
 * Task class
 * Task instances are created when a new appointment is created.
 * It should store all relevant information to an appointment.
 */
class Task
{
    constructor(name){
        this._name = name;
        this._category = null;
        this._important = false;
        this._completed = false;
        this._dueDate = null;
    }

    get name(){
        return this._name
    }

    get category(){
        return this._category;
    }

    get completed() {
        return this._completed
    }

    get important() {
        return this._important
    }

    get dueDate(){
        return this._dueDate
    }

    set dueDate(newdueDate) {
        this._dueDate = newdueDate;
    }

    set name(newName) {
        this._name = newName;
    }

    set category(newCategory) {
        this._category = newCategory;
    }

    set completed(boolean) {
        this._completed = boolean
    }

    set important(boolean) {
        this._important = boolean
    }

    toggleCompleted() {
        if (this._completed = false) {
            this._completed = true
        } else {
            this._completed = false
        }
    }

    toggleImportant() {
        if (this._important = false) {
            this._important = true
        } else {
            this._important = false
        }
    }

    /***
     * fromData method of class Task
     * - Takes an Object as its argument; dataObject here
     * - assigns the dataObject's properties values with the respective properties of the class Appointment
     */

    fromData(dataObject){
        this._name = dataObject._name;
        this._category = dataObject._category;
        this._dueDate = dataObject._dueDate;
        this._important = dataObject._important;
        this._completed = dataObject._completed;
    }
}


/**
 * TaskList class
 * A TaskList instance should be created when the page loads.
 * It will hold all Tasks.
 */
class TaskList
{
    constructor(){
        this._taskList = []
    }

    get taskList(){
        return this._taskList
    }

    addTask(task){
        this._taskList.push(task)
        
    }

    getTask(index){
        return this._taskList[index]
    }

    removeTask(index){
        this._taskList.splice(index,1)
    }

    /***
     * fromData method of class TaskList
     * - Takes an Objects as its argument; parenthesis dataObject
     * (the object has a property of taskList with a value of array of objects)
     * - creates a class Task with the array object's data and push it to the  an object with appoinmentList array of the class 
     */
    fromData(dataObject) {
        let data = dataObject._taskList;
        for (let i = 0; i < data.length; i++) {
            let task = new Task()
            task.fromData(data[i])
            this._taskList.push(task)
        }
    }
}

/**
 * checkLocalStorageData  function
 * Used to check if any data in LS exists at a specific key
 * @param {string} key LS Key to be used
 * @returns true or false representing if data exists at key in LS
 */
function checkLocalStorageData (key)
{
    if (localStorage.getItem(key) != null)
    {
        return true;
    }
    return false;
}
/**
 * getDataLocalStorage  function
 * Used to retrieve data from LS at a specific key. 
 * @param {string} key LS Key to be used
 * @returns data from LS in JS format
 */
function getDataLocalStorage (key)
{
    let data = localStorage.getItem(key);
    try
    {
        data = JSON.parse(data);
    }
    catch(err){}
    finally
    {
        return data;
    }
}
/**
 * updateLocalStorage  function
 * Used to store JS data in LS at a specific key
 * @param {string} key LS key to be used
 * @param {any} data data to be stored
 */
function updateLocalStorage (key, data)
{
    let json = JSON.stringify(data);
    localStorage.setItem(key, json);
}
// Global tasks variable
let Tasks = new TaskList();