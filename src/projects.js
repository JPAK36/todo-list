
// DOM Elements Factory Function
const createElements = () => {
    
    const createListElement = () => {
        const li = document.createElement('li');
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

// Add Project Factory Function
const addProject = () => {
    /* TODO: use awaitingInput variable to prevent add project button 
    being pressed multiple times.

    Also make it so that if the user clicks add project and then clicks 
    something else with out choosing a name to remove it
    */
    if (awaitingInput()) return;

    const createDOMElements = createProjectDOM();
   
    createDOMElements.projectInputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const projectName = createDOMElements.projectNameInput.value;

        if (projectName.match(/^[\s]/)) return alert('Project name cannot start with a space');

        createDOMElements.projectInputForm.remove();
        createDOMElements.projectListElement.insertBefore(createDOMElements.newProject(projectName), createDOMElements.iconSpan); 
    });

}

export default addProject