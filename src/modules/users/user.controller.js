import * as userService from './user.service.js';

export const getUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
};

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await userService.createUser({ username, email, password });
        res.status(201).json({ message: 'Usuario registrado', user: newUser });
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
};