# Productive-To-Do-App

# Tools and Concepts Used: 
- Tailwindcss: Customizing
- Javascript: Object-Oriented Programming, DOM manupilation
- HTML: Basic structuring.
- CSS: Mostly tailwind
- GIT: Tracking and version control

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
