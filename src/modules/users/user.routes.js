import express from 'express';
import * as userController from './user.controller.js';

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/register', userController.register);

export default router