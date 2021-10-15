
const updateStorage = () => {
    
    const getProjects = () => {
        // creates an array of objects 
        const projects = JSON.parse(localStorage.getItem('projects') || '[]');
        return projects;
    }

    const saveProject = (projectToSave) => {
        const projects = getProjects();

        // find method returns the first object that matches the id
        const existing = projects.find(project => project.id == projectToSave.id);
        
        if (existing) {
            existing.projectName = projectToSave.projectName;
            existing.tasks = projectToSave.tasks;
        }
        else {
            projectToSave.id = Math.floor(Math.random() * 1000000);
            // Add projectName
            // Add Tasks array containing another array which includes task, priority, dueDate, and true/false for completed or not
            projects.push(projectToSave);
        }

        localStorage.setItem('projects', JSON.stringify(projects));
    }

   const deleteProject = (id) => {
        const projects = getProjects();
        const updatedProjectList = projects.filter(project => project.id != id);

        localStorage.setItem('projects', JSON.stringify(updatedProjectList));
   }

    return { getProjects, saveProject, deleteProject }
}

export default updateStorage();