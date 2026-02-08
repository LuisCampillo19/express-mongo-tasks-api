import Task from './task.model.js';

export const getAllTasks = async () => {
    return await Task.find();
};

export const getTaskById = async (id) => {
    return await Task.findById(id);
};

export const createTask = async (taskData) =>{
    const newTask = new Task(taskData);
    return await newTask.save();
};

export const updateTask = async (id, taskData) => {
    return await Task.findByIdAndUpdate(id, taskData, { new: true });
};

export const deleteTask = async (id) => {
    return await Task.findOneAndDelete(id);
};