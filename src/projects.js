import createElements from "./createDOMElements";

const createProjectDOM = () => {
    const projectsContainer = document.querySelector('.project-list');

    const projectListElement =  createElements.createListElement('project-item');
    
    const projectInputForm = createElements.createForm();
    const projectNameInput = createElements.createInputField('Project name...');
    projectInputForm.append(projectNameInput);

    const newProject = (name) => {
        const newProject = createElements.createSpanElement('project-name');
        newProject.textContent = name;
        return newProject;
    }

    const iconSpan = createElements.createSpanElement('icons');
    const editIcon = createElements.createImageElement('images/edit-icon.svg', 'edit-icon');
    const deleteIcon = createElements.createImageElement('images/delete-icon.svg', 'delete-icon');
    
    editIcon.classList.add('edit-project');
    deleteIcon.classList.add('delete-project');
    
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
    const projectSpan = createElements.createSpanElement('project-name');

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
        if (e.target.closest('.delete-project')) {
            e.target.closest('.project-item').remove();
        }
    });
}
 
const editProject = (e) => {
    if (awaitingInput()) return;
    const inputForm = createElements.createForm();
    const inputField = createElements.createInputField('Project name...');
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
    editProject,
    createElements
}