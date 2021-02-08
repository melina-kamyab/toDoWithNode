# ToDo-List with Node.js

---

_A to-do list where all items from clients are stored MongoDB_

## Installation:

Create a new folder

1. Navigate to the directory where you want to put your repository,
2. Run git clone `https://github.com/melina-kamyab/toDoWithNode.git´
3. Run npm install to install node modules

## Naming conventions

- Below you'll find a brief summary of the conventions for this project\*

### Variables

- Use let or const instead of var
- When naming variables use **camelCase**
  - Eg. "let userName = "User";\*
- When naming global variables use **UPPERCASE**
  _Eg. `const PI = 3.14;´_

### Variables in CSS

- When naming variables **kebab-case**
  - Eg. \$bg-color: grey;\*

### Functions

- **Don't** use arrow functions.
  _When writing functions write `function functionName(){}´_
- Function names should be in **camelCase**

### Classes

- Class names should use **PascalCase**
  \*Eg. ClassTask

## Project structure

- ProjectFolder/ _ schema models, views, public and js-files are placed here_
  - _model/ \_the schemas are placed in here_
  - _public/ \_styles folder with css-files and other files that are related to styling are placed in here_
  - _routes/ \_the routes to the databas are placed in here_
  - _views/ \_ejs-files are placed in here_
  - _scss/ \_main.scss is placed here_
