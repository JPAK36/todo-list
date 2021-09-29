
// DOM Elements Factory Function
const createElements = () => {
    
    const createListElement = () => {
        const li = document.createElement('li');
        li.setAttribute('class', 'project-item');
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

    const createInputField = () => {
        const userInput = document.createElement('input');
        userInput.setAttribute('type', 'text');
        userInput.setAttribute('placeholder', 'Project name...');
        userInput.setAttribute('id', 'user-input');
        userInput.required = true;

        return userInput;
    }

    return {createListElement, createSpanElement, createImageElement, createInputField, createForm}
}

const createProjectDOM = () => {
    const createProject = createElements();
    const projectsContainer = document.querySelector('.project-list');

    const projectListElement =  createProject.createListElement();
    
    const projectInputForm = createProject.createForm();
    const projectNameInput = createProject.createInputField();
    projectInputForm.append(projectNameInput);

    const newProject = (name) => {
        const newProject = createProject.createSpanElement('project-name');
        newProject.textContent = name;
        return newProject;
    }

    const iconSpan = createProject.createSpanElement('icons');
    const editIcon = createProject.createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = createProject.createImageElement('images/delete-icon.svg', 'delete-icon');
    
    iconSpan.append(editIcon, deleteIcon);
    projectListElement.append(projectInputForm, iconSpan);
    projectsContainer.insertBefore(projectListElement, projectsContainer.lastElementChild);

    return {newProject, projectNameInput, projectInputForm, iconSpan, projectListElement}
}

const awaitingInput = () => {
    const userInput = document.querySelector('#user-input');
    if (userInput != null) return true;

    return false;
}

const handleUserInput = () => { 
    const userInput = document.querySelector('#user-input')
    const inputForm = userInput.parentElement;
    const projectItem = inputForm.parentElement;
    const projectSpan = createElements().createSpanElement('project-name');

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const projectName = userInput.value;
        if (projectName.match(/^[\s]/)) return alert('Project name cannot start with a space');
        projectSpan.textContent = projectName;
        userInput.parentElement.remove();
        projectItem.insertBefore(projectSpan, projectItem.childNodes[0]); 
    });
}

const addProject = () => {
    if (awaitingInput()) return;
    createProjectDOM();
    handleUserInput();
}

const deleteProject = () => {
    document.addEventListener('click', (e) => {
        // TODO: Add delete-project class to delete btn to avoid errors when user clicks delete task btn
        if (e.target.closest('.delete-icon')) {
            e.target.closest('.project-item').remove();
        }
    });
}
 
const editProject = (e) => {
    if (awaitingInput()) return;
    const inputForm = createElements().createForm();
    const inputField = createElements().createInputField();
    const projectName = e.target.parentElement.previousElementSibling;

    inputField.value = projectName.textContent;
    projectName.remove();
    inputForm.append(inputField);

    const projectItem = e.target.closest('.project-item');
    projectItem.insertBefore(inputForm, projectItem.childNodes[0]);

    handleUserInput();
}

export { 
    addProject,
    deleteProject,
    editProject
}