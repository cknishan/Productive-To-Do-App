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

