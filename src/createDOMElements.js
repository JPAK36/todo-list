import handlers from "./handlers"
import updateStorage from "./storage";

// DOM Elements Factory Function
const createElements = () => {
    
    const createListElement = (htmlClass) => {
        const li = document.createElement('li');
        li.setAttribute('class', htmlClass);
        return li;
    }

    const createSpanElement = (htmlClass) => {
        const span = document.createElement('span');
        span.classList.add(htmlClass);
        return span;
    }

    const createImageElement = (src, htmlClass) => {
        const img = document.createElement('img');
        img.classList.add(htmlClass);
        img.setAttribute('src', src);
        img.setAttribute('draggable', 'false');
        return img;
    }
    
    const createForm = () => {
        const inputForm = document.createElement('form');
        return inputForm;
    }

    const createInputField = (placeholderText) => {
        const userInput = document.createElement('input');
        userInput.setAttribute('type', 'text');
        userInput.setAttribute('placeholder', placeholderText);
        userInput.setAttribute('id', 'user-input');
        userInput.required = true;

        return userInput;
    }

    const createDiv = (htmlClass) => {
        const div = document.createElement('div');
        div.setAttribute('class', htmlClass);
        return div;
    }

    return {createListElement, createSpanElement, createImageElement, createInputField, createForm, createDiv}
}

const createIconSpan = () => {
    const view = createElements();

    const iconSpan = view.createSpanElement('icons');
    const editIcon = view.createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = view.createImageElement('images/delete-icon.svg', 'delete-icon');
    
    editIcon.classList.add('edit-project');
    deleteIcon.classList.add('delete-project');
    
    iconSpan.append(editIcon, deleteIcon);
    
    return iconSpan;
}

const addProjectToSidebar = () => {
    const view = createElements();
    const projectsContainer = document.querySelector('.project-list');

    const projectListElement =  view.createListElement('project-item');
    
    const projectInputForm = view.createForm();
    const projectNameInput = view.createInputField('Project name...');
    projectInputForm.append(projectNameInput);

    const iconSpan = createIconSpan();
    projectListElement.append(projectInputForm, iconSpan);
    projectsContainer.insertBefore(projectListElement, projectsContainer.lastElementChild);

    setTimeout(() => {
        projectNameInput.focus();
    }, 0);
}

const addProjectToNotepad = (projectId) => {
    const view = createElements();

    const projects = updateStorage.getProjects();
    const projectToAdd = projects.find(project => project.id == projectId);
    const projectName = projectToAdd.projectName;

    const notepad = document.querySelector('#writing-area');
    const projectDiv = view.createDiv('project');
    projectDiv.setAttribute('data-project-id', projectId);
    const skipLine = view.createDiv('skip-line');
    
    const projectHeading = view.createDiv('project-heading');
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'notepad-text');
    h2.textContent = projectName;
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'notepad-text');
    h3.textContent = 'Due Date';
        
    const tasksContainer = document.createElement('ul');
    tasksContainer.classList.add('notepad-text', 'todos');

    const addTaskListElement = view.createListElement('task');
    const addTaskSpan = view.createSpanElement('add-task');
    const addIcon = view.createImageElement('images/add-icon.svg', 'add-icon');
    addTaskSpan.append(addIcon, 'Add Task');

    addTaskListElement.append(addTaskSpan);
    tasksContainer.append(addTaskListElement, skipLine);
    projectHeading.append(h2, h3);
    projectDiv.append(projectHeading, tasksContainer);
    notepad.append(projectDiv);
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
    
    // update localStorage on due date change
    dateInput.addEventListener('change', () => {
        const projectId = dateInput.closest('.project').dataset.projectId;
        const taskId = dateInput.closest('[data-task-id]').dataset.taskId;
        const newDueDate = dateInput.value;

        return handlers.onTaskDueDateEdit(projectId, taskId, newDueDate);
    });

    return dueDateSpan;
}

// creates HTML for project items in sidebar from localStorage item
const _createProjectItemHTML = (id, name) => {
    const view = createElements();

    const projectItem = view.createListElement('project-item');
    projectItem.setAttribute('data-project-id', id);
    const projectName = view.createSpanElement('project-name');
    projectName.textContent = name;
    const iconSpan = createIconSpan();

    projectItem.append(projectName, iconSpan);

    return projectItem;
}
// Updates project list in the sidebar 
const updateProjectList = (projects) => {
    const projectsListContainer = document.querySelector('.project-list');
    const addProjectBtn = document.querySelector('[data-add-project]');
    
    // Clear all elements of class '.project-item'
    const projectsArray = [].slice.call(projectsListContainer.children);
    projectsArray.forEach(item => {
        if (item.classList.contains('project-item')) item.remove();
    });

    for (const project of projects) {
        const html = _createProjectItemHTML(project.id, project.projectName);
        projectsListContainer.insertBefore(html, addProjectBtn);
    }

    projectsListContainer.querySelectorAll('.project-item').forEach(projectItem => {
        projectItem.addEventListener('click', (e) => {
            const userInput = document.querySelector('#user-input');
            if (e.target.nodeName === 'IMG' || userInput) return;
            handlers.onProjectSelect(projectItem.dataset.projectId);
        });
    });
}

const loadTask =  (taskObj) => {
    const view = createElements();

    const task = view.createListElement('task');
    task.setAttribute('data-task-id', taskObj.taskId);

    const taskItem = view.createSpanElement('task-item');
    
    const taskNameSpan = view.createSpanElement('task-text');
    taskNameSpan.textContent = taskObj.item;
    
    const iconSpan = createIconSpan();
    taskItem.append(taskNameSpan, iconSpan);
   
    const dueDateSpan = addDueDateToDOM();

    const priorityIcon = dueDateSpan.querySelector('.priority-icon');
    priorityIcon.classList.add(`priority-${taskObj.priority}`);
    
    const dateInput = dueDateSpan.querySelector('input');
    dateInput.value = taskObj.dueDate;
  
    if (taskObj.isComplete) task.classList.add('completed');

    task.append(taskItem, dueDateSpan);

    return task;
}

const updateActiveTab = (tab) => {
    const currentActiveTab = document.querySelector('.active');
    if (currentActiveTab) currentActiveTab.classList.remove('active');
    tab.classList.add('active');
    const projectNameSpan = tab.children.item(0);
}

export { addProjectToSidebar, addProjectToNotepad, addDueDateToDOM, createElements, updateProjectList, updateActiveTab, loadTask };