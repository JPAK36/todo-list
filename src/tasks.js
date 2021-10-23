import {createElements} from "./createDOMElements";

const toggleTask = (taskElement) => {
    taskElement.classList.toggle('completed');
}

const addTaskToDOM = (addTaskBtn) => {
    const taskListElement = createElements().createListElement('task');
    const taskSpan = createElements().createSpanElement('task-item');
    taskSpan.textContent = 'user input'; // TODO: Get user input

    const iconSpan = createElements().createSpanElement('icons');
    // TODO: Can't add second class with this method so figure out another way to add a second class to icons
    const editIcon = createElements().createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = createElements().createImageElement('images/delete-icon.svg', 'delete-icon');

    iconSpan.append(editIcon, deleteIcon);
    taskSpan.append(iconSpan);
    taskListElement.append(taskSpan);
    // need to append taskSpan to whichever project it belongs to
    const container = addTaskBtn.closest('.todos');
    const numberOfTasks = container.childElementCount - 2;

    container.insertBefore(taskListElement, container.children[numberOfTasks]);

    return taskSpan;
}

const addDueDateToDOM = () => {
    // create span with class 'due-date'
    // create priority icon with class 'priority-icon priority-low'
    // create span with class 'date' and set textContent to default date (current date)
    // create calendar icon with class 'calendar-icon'
    const createDueDate = createElements();

    //const dueDateSpan = createDueDate.
}

const addTask = () => {
    // create li with class 'task' and append everything to it

}

export {
    toggleTask,
    addTaskToDOM,
}