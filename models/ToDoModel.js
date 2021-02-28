import mongoose from "../connection/connect.js";
class todoModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.TodoSchema = new this.Schema({
            name: String,
            description: String,
            date: Date,
            hour: String,
            done: Boolean
        });
        this.model = mongoose.model("tarea",this.TodoSchema);
    }
    // MOSTRAR TAREA
    getTarea(){
        return new Promise((resolve,reject)=>{
            this.model.find({},(err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
        
    }

    //CREAR TAREA
    createTarea(name, description, date, hour, done){
        var tarea = {
            name,
            description,
            date,
            hour,
            done
        };
        var newTarea = new this.model(tarea);
        return new Promise((resolve,reject)=>{
            newTarea.save().then((docs)=>{
                console.log("La tarea ha sido registrada con exito..!!");
                resolve(docs);
            });
        });
    }

    //ACTUALIZAR TAREA
    updateTarea(id, tarea){
        return new Promise((resolve, reject)=>{
            this.model.update({_id: id},{$set: tarea}, (err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });    
        });
        
    }

    //ACTUALIZAR EL ATRIBUTO DONE
    updateDone(id, done){
        return new Promise((resolve, reject)=>{
            this.model.update({_id: id},{done: done}, (err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });    
        });
        
    }
    //ELIMINAR TAREA
    deleteTarea(id){
        return new Promise((resolve,reject)=>{
            this.model.remove({_id:id}).then((err,docs)=>{
                if(err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }

};
export default todoModel;