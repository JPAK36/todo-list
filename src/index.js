// Sidebar Module
const sidebar = ( () => {
    
    const toggleSidebar = () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('toggle-sidebar');
    }
    
    const toggleBtn = document.getElementById('bars-icon');
    toggleBtn.addEventListener('click', toggleSidebar);
})();