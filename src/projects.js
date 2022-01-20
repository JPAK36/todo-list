import { addProjectToSidebar, addProjectToNotepad, createElements } from "./createDOMElements";
import handlers from "./handlers";
import updateStorage from "./storage"

const awaitingInput = () => {
    const userInput = document.querySelector('#user-input');
    if (userInput != null) return true;

    return false;
}

const handleUserInput = () => { 
    // This is DOM Stuff
    const userInput = document.querySelector('#user-input')
    const inputForm = userInput.parentElement;
    const projectItem = inputForm.parentElement;
    const projectSpan = createElements().createSpanElement('project-name');
    
    const projectName = userInput.value.trim();
    if (!projectName) return;

    projectSpan.textContent = projectName;
    userInput.parentElement.remove();
    projectItem.insertBefore(projectSpan, projectItem.childNodes[0]); 
}

const addProject = () => {
    if (awaitingInput()) return;
    addProjectToSidebar();
    
    const userInput = document.querySelector('#user-input');
    const inputForm = userInput.parentElement;
    const projectItem = inputForm.parentElement;

    userInput.addEventListener('blur', function () {
        if (userInput.value.trim() == '') {
            projectItem.remove();
            return;
        }
        handleUserInput();

        const projectName = projectItem.firstElementChild.textContent;
        handlers.onProjectAdd(projectName); 

        const projectList = document.querySelector('.project-list');
        // Select last project added and get id attribute
        const projectId = projectList.children[projectList.childElementCount - 2].getAttribute('data-project-id');
        if (!awaitingInput()) addProjectToNotepad(projectId);
    });

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleUserInput();
        const projectName = projectItem.firstElementChild.textContent;
        handlers.onProjectAdd(projectName); 
        const projectList = document.querySelector('.project-list');
        const projectId = projectList.children[projectList.childElementCount - 2].getAttribute('data-project-id');
        if (!awaitingInput()) addProjectToNotepad(projectId);
    });
}

const deleteProject = () => {
    const projectList = document.querySelector('.project-list');
    projectList.addEventListener('click', (e) => {
        if (e.target.closest('.delete-project')) {
            const doDelete = confirm('Are you sure you want to delete this project and all its tasks? This action cannot be undone.');
            if (!doDelete) return;
            const projectId = e.target.closest('[data-project-id]').dataset.projectId;
            const projectElements = document.querySelectorAll(`[data-project-id="${projectId}"]`);
            projectElements.forEach(element => element.remove());
            updateStorage.deleteProject(projectId);
        }
    });
}
 
const editProject = (e) => {
    if (awaitingInput()) return;
    
    // This is DOM Stuff
    const inputForm = createElements().createForm();
    const inputField = createElements().createInputField('Project name...');
    const projectName = e.target.parentElement.previousElementSibling;

    inputField.value = projectName.textContent;
    projectName.remove();
    inputForm.append(inputField);
    
    const projectItem = e.target.closest('.project-item');
    projectItem.insertBefore(inputForm, projectItem.childNodes[0]);
    
    const userInput = document.querySelector('#user-input');
    userInput.focus();
    
    const projectId = projectItem.dataset.projectId;

    userInput.addEventListener('blur', function () {
        if (userInput.value != '') handleUserInput();
        const projectName = projectItem.firstElementChild.textContent;
        updateNameOnNotepad(projectId, projectName);
        handlers.onProjectNameEdit(projectId, projectName);
    });

    inputForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleUserInput();
        const projectName = projectItem.firstElementChild.textContent;
        updateNameOnNotepad(projectId, projectName);
        handlers.onProjectNameEdit(projectId, projectName);
    });

    const updateNameOnNotepad = (projectId, projectName) => {
        const notepad = document.querySelector('.notepad');
        const projectTasksContainer = notepad.querySelector(`[data-project-id="${projectId}"]`);
        if (projectTasksContainer) {
            projectTasksContainer.childNodes[0].childNodes[0].textContent = projectName;
        }
    }
}

export { 
    addProject,
    deleteProject,
    editProject
}