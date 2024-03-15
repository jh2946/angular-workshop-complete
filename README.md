(work in progress)

# Angular To-do List (Complete)

This is the complete solution to the NYP DSC 2024 Intro to Angular workshop, project section.

## To-do (for collaborators):

Please don't ng generate any new components, all the necessary files are here already

HTML and CSS code are inside `.component.html` already. Some code is placeholder, you may need to replace them with directives and bindings. Add functionality into `.component.ts`

### `AppComponent`

- Store an array of objects called `tasks`, each object with `title` and `description` strings to represent the task
- **Ensure that this component's class members are done before moving on to the other components**

### `HomeComponent`

- The user will input a task title into the text box provided and click create. Ensure that when this happens the `AppComponent` `tasks` list gets a new object pushed to the back, `title` being the input and `description` being empty first
- Bind the `AppComponent` `tasks` array to this page's display, ensure each task gets represented as a box like the one shown in the prototype
- Ensure each `a` `h2` title somehow gets an `href="edit/{index}"`, `index` being the positional index of the task in the array

### `app/edit-task`

- This page has `index` passed in as part of the route path. Make sure that data is passed into this page (title, description, and all) extracted from the task with this index (for example, `/edit/0` gets the first task's information)
- Find some way so that when the user clicks "Save", the task's description data is changed to whatever the user typed in the textarea

## Folder structure

The folder structure is as follows:

### `project`

The folder inside which all Angular files were generated. When building the project, starting from the top level of this repo, type:

```
cd project
ng serve --open
```

### `prototype`

The folder which shows how the website will roughly look in the end, but without implementing any functionality yet. Contains `.html` files, from which we'll be copying HTML and CSS code from. See the README.md in this folder for more information.
