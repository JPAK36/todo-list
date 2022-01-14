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
        const taskName = taskTextSpan.textContent;
        taskTextSpan.remove();
        
        const inputForm = createElements().createForm();
        const inputField = createElements().createInputField('Enter Task...');

        inputField.value = taskName;
        
        inputForm.append(inputField);
        taskSpan.insertBefore(inputForm, iconSpan);
        taskListElement.prepend(taskSpan);
        addTask();
    });

    deleteIcon.addEventListener('click', (e) => {
        const projectId = e.target.closest('[data-project-id]').dataset.projectId;
        const taskId = e.target.closest('[data-task-id]').dataset.taskId;

        taskListElement.remove();
        updateStorage.deleteTask(projectId, taskId);
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
    if (taskContainer.dataset.taskId) {
        return handlers.onTaskNameEdit(projectId, taskContainer.dataset.taskId, task);
    }
    const taskObj = handlers.onTaskAdd(task, projectId);
    taskContainer.setAttribute('data-task-id', taskObj.taskId);
}

const validateUserInput = () => {
    const inputField = document.querySelector('#user-input');
    const inputForm = inputField.parentElement;
    const taskItem = inputForm.parentElement;
    const taskContainer = taskItem.parentElement;

    const userInput = inputField.value.trim();
    const taskTextSpan = createElements().createSpanElement('task-text');
    taskTextSpan.append(userInput);

    // Removes task container if task isn't yet in localStorage (has a taskId data attribute)
    if (userInput == '' && !taskContainer.dataset.taskId) {
        taskContainer.remove();
        return;
    } 
    else if (userInput == '' && taskContainer.dataset.taskId) return;
    inputForm.remove();
    taskItem.prepend(taskTextSpan);
}

// TODO: Update priority in localStorage
const updatePriority = (eventTarget) => {
    const taskItemClassList = eventTarget.parentElement.parentElement.classList;
    if (taskItemClassList.contains('completed')) return;
    const projectId = eventTarget.closest(['.project']).dataset.projectId;
    const taskId = eventTarget.closest('[data-task-id').dataset.taskId;

    const priorityClassList = eventTarget.classList;

    if (priorityClassList.contains('priority-low')) {
        priorityClassList.remove('priority-low');
        priorityClassList.add('priority-medium');
        return handlers.onTaskPriorityEdit(projectId, taskId, 'medium'); 
    }
    if (priorityClassList.contains('priority-medium')) {
        priorityClassList.remove('priority-medium');
        priorityClassList.add('priority-high');
        return handlers.onTaskPriorityEdit(projectId, taskId, 'high');
    }
    if (priorityClassList.contains('priority-high')) {
        priorityClassList.remove('priority-high');
        priorityClassList.add('priority-low');
        return handlers.onTaskPriorityEdit(projectId, taskId, 'low');
    }
}

export {
    toggleTask,
    addTaskToDOM,
    addTask,
    updatePriority,
}