import { addProject, deleteProject, editProject } from "./projects";
import updateStorage from "./storage";
import { updateProjectList, addProjectToNotepad, loadTask } from "./createDOMElements";
import { toggleTask, addTaskToDOM, addTask, updatePriority } from "./tasks";

// Load localStorage items on page load
window.onload = () => {
    const projects = updateStorage.getProjects();

    const loadAllProjects = () => {
        const notepad = document.querySelector('.notepad');
        
        projects.forEach(project => {
            addProjectToNotepad(project.id);

            const projectTasks = project.tasks;
            const projectContainer = notepad.querySelector(`[data-project-id="${project.id}"]`);
            const tasksList = projectContainer.querySelector('ul');
            const addTaskBtn = projectContainer.querySelector('.add-task');
            
            projectTasks.forEach(task => {
                const taskToAdd = loadTask(task);
                tasksList.insertBefore(taskToAdd, addTaskBtn.parentElement);
            });
        });
    }  
    updateProjectList(projects);
    loadAllProjects(projects);
}

// Sidebar Module
const sidebarController = (() => {

    const mobileToggleBtn = document.getElementById('bars-icon-mobile');
    if (window.innerWidth <= 1024 && mobileToggleBtn.classList.contains('hidden')) {
        mobileToggleBtn.classList.toggle('hidden');
    }

    const sidebar = document.getElementById('sidebar');
    
    const toggleSidebar = () => {
        sidebar.classList.toggle('toggle-sidebar');
        if (window.innerWidth <= 1024) mobileToggleBtn.classList.toggle('hidden');
    }
    
    const toggleBtn = document.querySelectorAll('.bars-icon');
    toggleBtn.forEach(button => {
        button.addEventListener('click', toggleSidebar);
    });        
})();

const projectController = (() => {
    deleteProject();
    const addProjectBtn = document.querySelector('[data-add-project]');
    addProjectBtn.addEventListener('click', addProject);
    const projectList = document.querySelector('.project-list');

    projectList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-project')) {
            editProject(e);
        }
    });
})();

const taskController = (() => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-text')) {
            const taskElement = e.target.closest('.task');
            toggleTask(taskElement);
        }
        if (e.target.classList.contains('add-task')) {
            addTaskToDOM(e.target);
            addTask();
        }
        if (e.target.classList.contains('priority-icon')) {
            updatePriority(e.target);
        }
    });
})();