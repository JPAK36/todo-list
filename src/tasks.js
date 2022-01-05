import {createElements} from "./createDOMElements";
import {format} from "date-fns";
import handlers from "./handlers";
import updateStorage from "./storage";

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
    const editIcon = createElements().createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = createElements().createImageElement('images/delete-icon.svg', 'delete-icon');

    editIcon.addEventListener('click', () => {
        if (taskListElement.classList.contains('completed')) return;
        const taskTextSpan = document.querySelector('.task-text');
        const task = taskTextSpan.textContent;
        taskTextSpan.remove();
        
        const inputForm = createElements().createForm();
        const inputField = createElements().createInputField('Enter Task...');

        inputField.value = task;
        
        inputForm.append(inputField);
        taskSpan.insertBefore(inputForm, iconSpan);
        taskListElement.prepend(taskSpan);
        addTask();
        // TODO: Update task in local storage
    });

    deleteIcon.addEventListener('click', (e) => {
        const projectId = e.target.closest('[data-project-id]').dataset.projectId;
        const taskToDelete = e.target.parentElement.previousElementSibling.textContent;
        taskListElement.remove();
        // TODO: Update this if using taskId
        updateStorage.deleteTask(projectId, taskToDelete);
    });

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
    
    const dateLabel = document.createElement('label');
    dateLabel.classList.add('date-label');
    
    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.required = true;

    const calendarIcon = createElements().createImageElement('images/calendar-icon.svg', 'calendar-icon');

    dateLabel.append(dateInput, calendarIcon);
    dueDateSpan.append(priorityIcon, dateLabel);

    return dueDateSpan;
}

const addTask = () => {
    const inputField = document.querySelector('#user-input');
    const inputForm = inputField.parentElement;
    const taskContainer = inputForm.parentElement.parentElement;

    inputField.addEventListener('blur', function (e) {
        const projectId = e.target.closest('[data-project-id]').dataset.projectId;
        const task = inputField.value;
        validateUserInput();
        //if (task) handlers.onTaskAdd(task, projectId);
        if (task) createTask(task, projectId, taskContainer);
    });
    
    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const projectId = e.target.closest('[data-project-id]').dataset.projectId;
        const task = inputField.value;
        validateUserInput();
        if (task) createTask(task, projectId, taskContainer);
    });
}

const createTask = (task, projectId, taskContainer) => {
    const taskObj = handlers.onTaskAdd(task, projectId);
    taskContainer.setAttribute('data-task-id', taskObj.task.taskId);
}

const validateUserInput = () => {
    const inputField = document.querySelector('#user-input');
    const inputForm = inputField.parentElement;
    const taskItem = inputForm.parentElement;
    const taskContainer = taskItem.parentElement;

    const userInput = inputField.value.trim();
    const taskTextSpan = createElements().createSpanElement('task-text');
    taskTextSpan.append(userInput);

        if (userInput == '') {
            taskContainer.remove();
            return;
        }
        inputForm.remove();
        taskItem.prepend(taskTextSpan);
        //iconSpan.insertAdjacentText('beforebegin', userInput);
}

// TODO: Update priority in localStorage
const updatePriority = (eventTarget) => {
    const taskItemClassList = eventTarget.parentElement.parentElement.classList;
    if (taskItemClassList.contains('completed')) return;

    const priorityClassList = eventTarget.classList;

    if (priorityClassList.contains('priority-low')) {
        priorityClassList.remove('priority-low');
        priorityClassList.add('priority-medium');
        return;
    }
    if (priorityClassList.contains('priority-medium')) {
        priorityClassList.remove('priority-medium');
        priorityClassList.add('priority-high');
        return;
    }
    if (priorityClassList.contains('priority-high')) {
        priorityClassList.remove('priority-high');
        priorityClassList.add('priority-low');
        return;
    }
}

export {
    toggleTask,
    addTaskToDOM,
    addTask,
    updatePriority,
}