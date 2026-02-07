import express from 'express'
import Task from '../model/taskModel.js'

const router = express.Router()

// get all the tasks
router.get('/', async (req, res) =>{
    try {
        const notes = await Task.find()
        res.status(200).json(notes)

        console.log('Todas las tareas obtenidas')
    } catch (err) {
        console.error(err)
    }
});

// get a task by id
router.get('/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const task = await Task.findById(id)
        // console.log(note)
        if(!task) return res.status(404).json({ error: 'Tarea no encontrada'})
        res.status(200).json(task)
        // console.log("OBTENER UNA TAREA POR ID")
    } catch (err) {
        console.error(err)
    }
});

// create a task
router.post('/', async (req, res) =>{
    try {
        const { title, content } = req.body;      
        const newTask = new Task({ title, content });
        
        const savedTask = await newTask.save();
        res.status(201).json({ mensaje: 'Tarea creada', Tarea: savedTask});
        // console.log('CREANDO UNA TAREA');
    } catch (err) {
        console.error(err)
    }
});

// update task by id
router.put('/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true})
        if(!updatedTask) return res.status(404).json({ error: 'Tarea no fue encontrada'})
        res.status(200).json(updatedTask)
        console.log(id)
    } catch (err) {
        console.error(err)
    }
});

// delete task by id
router.delete('/:id', async (req,res) =>{
    try {
        const id = req.params.id
        const deletedTask = await Task.findByIdAndDelete(id)
        if(!deletedTask) return res.status(404).json({ error: 'La tarea no se pudo eliminar'})
        res.status(200).json(deletedTask)
        // console.log("ELIMINANDO UNA TAREA")
    } catch (err) {
        console.log(err)
    }
});

export default router