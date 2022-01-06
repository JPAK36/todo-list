const updateStorage = () => {
    
    const getProjects = () => {
        // creates an array of objects 
        const projects = JSON.parse(localStorage.getItem('projects') || '[]');
        return projects;
    }

    const getTasks = (projectId) => {
        const projects = getProjects();
        const currentProject = projects.find(project => project.id == projectId);
        const tasks = currentProject.tasks;
        return tasks;
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

    const saveTask = (projectId, taskToSave) => {
        const projects = getProjects();     
        const projectToUpdate = projects.find(project = project.id == projectId);
        const tasksArray = projectToUpdate.tasks
        const existing = tasksArray.find(task => task.taskId == taskToSave.taskId);
        /*
        existing = taskToSave;
        existing.item = taskName;
        existing.priority = priority;
        existing.dueDate = dueDate;
        existing.isComplete = isComplete;
        */
    }

    const deleteProject = (id) => {
        const projects = getProjects();
        const updatedProjectList = projects.filter(project => project.id != id);

        localStorage.setItem('projects', JSON.stringify(updatedProjectList));
    }

    const deleteTask = (id, taskId) => {
        const projects = getProjects();
        const projectWithTask = projects.find(project => project.id == id);
        const allTasks = projectWithTask.tasks;
        // Each task is an object
        const updatedTaskObj = allTasks.filter(taskObj => taskObj.taskId != taskId);
        projectWithTask.tasks = updatedTaskObj;

        saveProject(projectWithTask);
    }

    return { getProjects, getTasks, saveProject, deleteProject, deleteTask }
}

export default updateStorage();