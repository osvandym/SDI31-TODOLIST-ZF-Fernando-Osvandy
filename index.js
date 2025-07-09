/*
•Create of list of tasks
 -unordered list
  -Stretch Goal: option to toggle between ordered/unordered

•Add to the list
•Strikethrough individual list items
•Remove from the list

Style
•Div for page
 -H1 title To Do List -> Possibly encapsulate in <header></header>
 -Table
  -Table Header
   -Check When Completed, Task, Deadline, Delete Item
  -Table Body
   -Each Table Row needs to have the following:
    -Interactive check box - when checked strikethrough task
    -td for the task
    -td for the deadline -> date box
    -Interactive element to delete parent table row
      -Stretch Goal One: Confirm Deletion
      -Stretch Goal Two: Archive completed tasks in a viewable location
   -On task fill out task and submit, create new task line

•Stretch Goal: save data -> session storage or local storage > take our data and transform it into JSON
  then store it with a key in session or local storage. Run windows.onload() > to check for the key in storage and if its there
  transform the JSON into HTML or data and then put on the page.
*/

let task_html = `
        <tr>
          <td><input type="checkbox"/></td>
          <td>Grocery Shopping</td>
          <td><input type="date"/></td>
          <td><input type="image" alt="delete" src="/img/delete-icon.png" width="48" height="48"/></td>
        </tr>
`