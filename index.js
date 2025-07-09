/* =========CREATING A TASK FUNCTIONALITY========= */
/* DONE Submit the new task row
    - Submit button click occurs
    - Grab task id: new-task
    - Grab date id: new-date
    - Create row id
    - Create our html with row ID and task & date inputs
    - Increment row counter
    - Create <tr> element
    - Set <tr> innerHtml with earlier created html
    - Insert new task at the top of the list
*/
/* DONE Clear the new task row
    - Clear button click occurs
    - Grab task id: new-task
    - Grab date id: new-date
    - Set values to default
*/
/* ========TASK FUNCTIONALITY========= */
/* DONE Strikethrough 'completed' tasks
    - Event Check box click occurs
    - Get row ID
    - Get the second child
    - Toggle completed class on that child
*/
/* DONE Delete tasks
    - On image click occurs
    - Get parent <tr> by ID
      OPTIONS TO GRAB CORRECT TABLE ROW
        this.parentElement.parentElement
        document.querySelector('#someID')
    - Delete the parent <>
*/
/*  ========STRETCH GOALS==========
• Stretch: Store Task Data
• Stretch: Archive completed tasks
*/

const create_NewTask = (() => {
  var rowIdCount = 0;

  return () => {
    // Grabs task and date data
    let newTask = document.querySelector("#new-task").value;
    let newDate = document.querySelector("#new-date").value;

    // Creates <tr> and assigns an id and innerHTML
    let task = document.createElement("tr");
    task.id = `row-${rowIdCount}`  // Option 1: "row-" + rowIdCount; or Option 2: `row-${rowIdCount}`
    task.innerHTML = `
          <td><input type="checkbox" onclick="strikethrough('${task.id}')"/></td>
          <td>${newTask}</td>
          <td><input type="date" value="${newDate}"/></td>
          <td><input type="image" alt="delete" src="/img/delete-icon.png" width="48" height="48" onclick="delete_Task('${task.id}')"/></td>
    `;

    // Appends <tr> to <tbody> and moves it after the task creation row
    document.querySelector("#create-task").after(task);

    rowIdCount++ // Options: rowIdCount = rowIdCount + 1; rowIdCount += 1; rowIdCount++; ++rowIdCount; BUT NOT rowIdCount =+ 1;
    clear_NewTask();
  };
})();

const clear_NewTask = () => {
  document.querySelector('#new-task').value = '';
  document.querySelector('#new-date').value = '';
}

const strikethrough = ( taskID ) => {
  document.querySelector(`#${taskID}`).children[1].classList.toggle("completed");
}

const delete_Task = ( taskID ) => {
  document.querySelector(`#${taskID}`).remove();
}