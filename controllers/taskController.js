let tasks = [
    {
        id: 1,
        title: "Tarea1",
        description: "Descripción de la tarea 1"
    },
    {
        id: 2,
        title: "Tarea2",
        description: "Descripción de la tarea 2"
    },
    {
        id: 3,
        title: "Tarea3",
        description: "Descripción de la tarea 3"
    }

];

function getTasks() {
    return tasks;
}

function createTask(title, description) {
    const newTask = {
        id: tasks.length + 1,
        title,
        description
    };

    tasks.push(newTask);
    return newTask;
    }

    //Funcion para eliminar tareas

    function deleteTask(id) {
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            const deletedTask = tasks.splice(index, 1)[0]; // Guardamos la tarea eliminada
            return deletedTask; // Devolvemos la tarea eliminada
        }
        return null; // Si no encuentra la tarea, devolvemos null
    }

    // Funcion para buscar tarea por ID

    function getTaskById(id) {
        return tasks.find(task => task.id === id || null);
        
    }   

    // Funcion para actualizar tareas
    function updateTask(id, updateFields){
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1){
            tasks[index] = { ...tasks[index], ...updateFields}; //Aqui se actualiza la tarea
            return tasks[index]; // Mostramos la tarea ya actualizada
        }
        return null; // Si no encuentra nada, devolvemos un null.
    }
module.exports = {
    getTasks, createTask, deleteTask, getTaskById, updateTask
}