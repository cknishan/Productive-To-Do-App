# Productive-To-Do-App
A Simple To Do app that is easy to use with simple clean UI and UX design.

## Tools and Concepts: 
- Tailwindcss
- Javascript
- HTML
- Git


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
# Why this Project?

## Inspiration and Uniqueness

## My Learning Outcome

