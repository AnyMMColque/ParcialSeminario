import ToDoModel from "../models/ToDoModel.js"
var tareas = new ToDoModel();
class ToDoController {
    constructor() {}
    //Controladores para las rutas
    //Controlador para Crear TAREA
    async createTarea(request, response) {
        var data = request.body;

        var result = await tareas.createTarea(
            data.name,
            data.description,
            new Date(),
            data.hour,
            data.done
        );
        response.status(200).json(result);
    }

    //Controlador para Mostrar TAREAS.
    async getTarea(request,response){
        var result = await tareas.getTarea();
        response.status(200).json(result);
    }

    //Controlador para Actualizar Tarea por ID
    async updateTarea(request,response){
        var dataupdate = request.body;
        var id = request.params.id;
        
        var result = await tareas.updateTarea(id, dataupdate);
        response.status(200).json(result);
    }

    //Controlador para actualizar el atributo DONE
    async updateDone(request,response){
        var doneupdate = request.body.done;
        var id = request.params.id;
        
        var result = await tareas.updateDone(id, doneupdate);
        response.status(200).json(result);
    }
    
    //Controlador para Eliminar Tarea por ID
    async deleteTarea(request,response){
        var id =request.params.id;

        var result = await tareas.deleteTarea(id);
        response.status(200).json(result);
    }
}

export default ToDoController;