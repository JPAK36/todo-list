import {createElements} from "./createDOMElements";
import {format} from "date-fns";

const toggleTask = (taskElement) => {
    taskElement.classList.toggle('completed');
}

const addTaskToDOM = (addTaskBtn) => {
    if (document.getElementById('user-input')) return;
    const taskListElement = createElements().createListElement('task');
    const taskSpan = createElements().createSpanElement('task-item');
    const inputForm = createElements().createForm();
    const inputField = createElements().createInputField('Enter Task...');
    
    inputForm.append(inputField);
    taskSpan.append(inputForm);

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

    setTimeout(() => {
        inputField.focus();
    }, 0);

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
    const inputField = document.querySelector('#user-input');
    const inputForm = inputField.parentElement;

    inputField.addEventListener('blur', function () {
        validateUserInput();
    });
    
    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        validateUserInput();
    });
}

const validateUserInput = () => {
    const inputField = document.querySelector('#user-input');
    const inputForm = inputField.parentElement;
    const taskItem = inputForm.parentElement;
    const taskContainer = taskItem.parentElement;
    const iconSpan = taskItem.lastElementChild;

    const userInput = inputField.value.trim();
    
        if (userInput == '') {
            taskContainer.remove();
            return;
        }
        inputForm.remove();
        iconSpan.insertAdjacentText('beforebegin', userInput);
}

export {
    toggleTask,
    addTaskToDOM,
    addTask
}