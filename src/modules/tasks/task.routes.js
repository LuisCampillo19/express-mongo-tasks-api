import express from 'express';
import * as taskController from './task.controller.js';

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', taskController.getTask);
router.post('/', taskController.create);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.remove);

export default router;