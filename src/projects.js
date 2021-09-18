
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
    
    const createInputField = () => {
        const userInput = document.createElement('input');
        userInput.setAttribute('type', 'text');
        userInput.setAttribute('placeholder', 'Project name...');
        userInput.setAttribute('id', 'user-input');
        return userInput;
    }

    return {createListElement, createSpanElement, createImageElement, createInputField}
}

// Add Project Factory Function
const addProject = () => {
    /* TODO: use awaitingInput variable to prevent add project button 
    being pressed multiple times. Consider cleaning the code up a bit
    by moving DOM related items to separate module

    */
    let awaitingInput = true;

    const createProject = createElements();
    const projectsContainer = document.querySelector('.project-list');

    const projectListElement = createProject.createListElement();
    
    const projectNameInput = createProject.createInputField();

    const newProject = (name) => {
        const newProject = createProject.createSpanElement('project-name');
        newProject.textContent = name;
        return newProject;
    }

    projectNameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && projectNameInput.value != '') {
            const projectName = projectNameInput.value;
            projectNameInput.remove();
            projectListElement.insertBefore(newProject(projectName), iconSpan);
            return awaitingInput = false;
        }
    });

    const iconSpan = createProject.createSpanElement('icons');
    const editIcon = createProject.createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = createProject.createImageElement('images/delete-icon.svg', 'delete-icon');
    
    iconSpan.append(editIcon, deleteIcon);
    projectListElement.append(projectNameInput, iconSpan);
    projectsContainer.insertBefore(projectListElement, projectsContainer.lastElementChild);
}

export default addProject