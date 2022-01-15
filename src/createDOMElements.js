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
    //const projectList = document.querySelector('.project-list');

    const projects = updateStorage.getProjects();
    const projectToAdd = projects.find(project => project.id == projectId);
    const projectName = projectToAdd.projectName;
    //const currentProjectNumber = projectList.childElementCount - 2;
    //const projectName = projectList.children[currentProjectNumber].textContent;

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

    // Add listeners for edit, delete ????
    projectsListContainer.querySelectorAll('.project-item').forEach(projectItem => {
        projectItem.addEventListener('click', () => {
            handlers.onProjectSelect(projectItem.dataset.projectId);
        });
    });
}

const updateActiveTab = (tab) => {
    // for all other projects, change display to none, to bring back set display to contents  
        // item.style.display = 'none'
    // remove active class from any other sidebar element
    const currentActiveTab = document.querySelector('.active');
    if (currentActiveTab) currentActiveTab.classList.remove('active');
    tab.classList.add('active');
    const projectNameSpan = tab.children.item(0); // Update notepad here?
    //console.log(projectNameSpan);
}

export { addProjectToSidebar, addProjectToNotepad, createElements, updateProjectList, updateActiveTab };