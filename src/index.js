import {addProject, deleteProject} from "./projects";

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

    deleteProject();
    const addProjectBtn = document.querySelector('[data-add-project]');
    addProjectBtn.addEventListener('click', addProject);
})();