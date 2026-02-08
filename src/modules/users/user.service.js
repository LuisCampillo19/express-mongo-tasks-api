import User from './user.model.js';

export const getAllUsers = async (req, res) =>{
    return await User.find().select('-password');
};


export const createUser = async (req, res) =>{
    const newUser = new User(userData); 
    return await newUser.save();
};