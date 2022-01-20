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
            projects.push(projectToSave);
        }

        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const updateTask = (projectId, updatedTask) => {
        // tasks for current project
        const projects = getProjects();
        const projectToUpdate = projects.find(project => project.id == projectId);
        const tasksArray = projectToUpdate.tasks;
        
        // find task index and replace the task at that index to update
        const indexOfUpdatedTask = tasksArray.findIndex((taskObj) => {
            return taskObj.taskId == updatedTask.taskId;
        });

        tasksArray[indexOfUpdatedTask] = updatedTask;
        // Save updated tasks array to the project object
        projectToUpdate.tasks = tasksArray;
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const findTaskToUpdate = (projectId, existingTaskId) => {
        const projects = getProjects();     
        const projectToUpdate = projects.find(project => project.id == projectId);
        const tasksArray = projectToUpdate.tasks
        const existingTask = tasksArray.find(task => task.taskId == existingTaskId);
        return existingTask;
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
        
        const updatedTaskObj = allTasks.filter(taskObj => taskObj.taskId != taskId);
        projectWithTask.tasks = updatedTaskObj;

        saveProject(projectWithTask);
    }

    return { getProjects, getTasks, saveProject, deleteProject, deleteTask, findTaskToUpdate, updateTask }
}

export default updateStorage();