import { addProject, deleteProject, editProject } from "./projects";
import updateStorage from "./storage";
import { updateProjectList } from "./createDOMElements";
import { toggleTask, addTaskToDOM, addTask } from "./tasks";

// Load localStorage items on page load
window.onload = () => {
    const projects = updateStorage.getProjects();
    updateProjectList(projects);
}

// Sidebar Module
const sidebarController = (() => {

    const mobileToggleBtn = document.getElementById('bars-icon-mobile');
    if (screen.width <= 1024 && mobileToggleBtn.classList.contains('hidden')) {
        mobileToggleBtn.classList.toggle('hidden');
    }

    const sidebar = document.getElementById('sidebar');
    
    const toggleSidebar = () => {
        sidebar.classList.toggle('toggle-sidebar');
        if (screen.width <= 1024) mobileToggleBtn.classList.toggle('hidden');
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

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-project')) {
            editProject(e);
        }
    });
})();

const taskController = (() => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('task-item')) {
            const taskElement = e.target.parentElement;
            toggleTask(taskElement);
        }
        if (e.target.classList.contains('add-task')) {
            addTaskToDOM(e.target);
            addTask();
        }
    });
})();
/*
updateStorage.saveProject({
    projectName: "Project 1",
    tasks: [["Finish todo list", "low", "dueDate", false], ["Do something", "medium", "dueDate", true], ["Do something else", "high", "dueDate", false]],
    id: 816089
});
*/
//storage.deleteProject(581840);