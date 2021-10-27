import {createElements} from "./createDOMElements";
import {format} from "date-fns";

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
    const dueDate = addDueDateToDOM();
    taskListElement.append(taskSpan, dueDate);
    
    const container = addTaskBtn.closest('.todos');
    const numberOfTasks = container.childElementCount - 2;

    container.insertBefore(taskListElement, container.children[numberOfTasks]);

    return taskSpan;
}

const addDueDateToDOM = () => {
    const dueDateSpan = createElements().createSpanElement('due-date');

    const priorityIcon = createElements().createImageElement('images/priority-icon.svg', 'priority-icon')
    priorityIcon.classList.add('priority-low');
    
    const currentDate = createElements().createSpanElement('date');
    currentDate.textContent = format(new Date(), 'MM/dd/yyyy');

    const calendarIcon = createElements().createImageElement('images/calendar-icon.svg', 'calendar-icon');

    dueDateSpan.append(priorityIcon, currentDate, calendarIcon);
    
    return dueDateSpan;
}

const addTask = () => {
    // create li with class 'task' and append everything to it

}

export {
    toggleTask,
    addTaskToDOM,
}