# Productive-To-Do-App
A Simple To Do app that is easy to use with simple clean UI and UX design.

## About App Description
This is a simple to do app that uses local storage to save the users todo list data on the browser. As long as you don't clear the session storage all the todo datas will be updated and saved.
The functionality of the app are: Adding Tasks - Deleting Tasks - Mark as Complete - Mark as Important.

## Tools and Concepts: 
- Tailwindcss
- Javascript
- HTML
- Git

# Inspirtation Behind Project
This is a cliche web developement project. However, all the tutorials or projects I watched or viewed seem to miss the qualities of a real world application. Those apps were missing one of these important features: Responsive desgin, add Task as Important, Object-Oriented-Programming, localStorage system.

So, I decided to implement a To-Do app that will actually serve the purpose of a todo application of a real world and help with productivity of the user. Moreover, I build this project using tailwindcss which helped me learn how to implement and customize beautiful css design using tailwindcss.

# Tailwindcss Installation / Setup 

## Installation
```
npm install -D tailwindcss
npx tailwindcss init
```

## Configure Template paths
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
## Add tailwind directive to css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Start the tailwind CLI build process
```
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```
