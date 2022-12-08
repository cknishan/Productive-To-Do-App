# Productive-To-Do-App

## Key Features
- Local Storage for Data Persistency
- Different Task Categories
- Window Screen Size Viewport Content
- Simple Clean Responsive UI
- Set Due Date for each Task
- to be continued....

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
## 

## Readme Updates for tracking progress / pseudocodes / debugging etc
- Update local storage and retriving from local storage is done
- However, the view data and deleted data is not consistent with the local storage retriving
  - okay got it gotta use the save/retrive functionality every time after delete, completee and add. Better if I enclose those inside a function on shared.js and call that function each time when needed.
- also need a view.js file for a function that will show the proper todo tasks every time the page is refreshed.