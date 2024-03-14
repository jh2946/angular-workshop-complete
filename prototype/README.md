# prototype

### `index.html`

The "list" portion of the to-do list. Elements are displayed as rectangles with a title and description. Checkboxes can be toggled to mark the task (checked) as done or not done (unchecked).

Web path: `/`

Angular route `path` property: `''`

Intended functionalities (not implemented yet):
- When checkbox is checked, the list element will have an opacity of 50%, and 100% otherwise.
- Each list element header, regardless of whether it's checked or not, should link the user to the edit page. (Only the History Homework element works for now)
- The user creates a new task by typing the title in the "new task" input and clicking the "Create" button. The task will only have a title at first, no description.

### `about.html`

A placeholder just to show the simplest form of routing.

Web path: `/about`

Angular route `path` property: `'about'`

### `history_homework.html`

Each task will have an edit description page. Hence, each task will have its own route. This is the example edit description page for "History Homework".

Web path: `/edit/{index}`

Angular route `path` property: `'edit/:index'`

Intended functionalities (not implemented yet):
- When the user types in a description and clicks the "Save" button, this will change the description of this task to the textarea input. They'll also be redirected to the home (task list) page.
