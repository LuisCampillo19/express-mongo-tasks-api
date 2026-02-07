import * as taskService from './task.service.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
};

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await taskService.getTaskById(id);
        if (!task) return res.status(404).json({ error: 'Tarea no encontrada '});
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

export const create = async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({ error: "Titulo y contenido requeridos" });
        const newTask = await taskService.createTask({ title, content });
        res.status(200).json({ message: 'Tarea creada', task: newTask });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await taskService.updateTask(id, req.body);
        if (!updatedTask) return res.status(404).json({ error: 'Tarea no encontrada '});
        res.status(200).json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await taskService.deleteTask(id);
        if (!deletedTask) return res.status(404).json({ error: 'Tarea no encontrada '});
        res.status(200).json({ message: 'Tarea eliminada '});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};