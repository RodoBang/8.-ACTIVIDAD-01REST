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
/*function getMaxId(){
    return tasks.length ? Math.max(...tasks.map(task => task.id)) : 0;
}*/

function getFirstAvailableId() {
    
    const ids = tasks.map(task => task.id);
    let id = 1;
    while (ids.includes(id)) {
        id++;
    }
    return id;
}
function SortTasks() {
    tasks.sort((a, b) => a.id - b.id);
};
function createTask(title, description) {
    const newTask = {
        id: getFirstAvailableId(),
        title,
        description
    };

    tasks.push(newTask);
    SortTasks();
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
   
        /*function getTaskById(id){
            id = parseInt(id);
            const taskFound = tasks.find((task) =>{
                return task.id === id;
                });
                console.log(taskFound);
                return taskFound;
        }*/

            /* 
                function updateTask(taskToUpdated){
                taskToUpdated.id = parseInt(taskToUpdated.id);
                tasks = tasks.map((t) => (t.id === taskToUpdated.id ? taskToUpdated : t));
                return taskToUpdated;
                }
            */
    // Funcion para actualizar tareas
    function updateTask(id, updateFields){
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1){
            tasks[index] = { ...tasks[index], ...updateFields}; //Aqui se actualiza la tarea
            return tasks[index]; // Mostramos la tarea ya actualizada
        }
        return null; // Si no encuentra nada, devolvemos un null.
    }

    /*
    function deleteTask(id){
    const _id = parseInt(id);
    const taskToDelete = getTaskById(_id);
    console.log("Task to delete: " + taskToDelete);
    tasks = tasks.filter((t) => t.id !== _id);
    return taskToDelete;
    }
    */
module.exports = {
    getTasks, createTask, deleteTask, getTaskById, updateTask
}