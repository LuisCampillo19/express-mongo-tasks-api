import express from 'express';
import { requestLogger } from './common/middlewares/logger.js';
import taskRoutes from './modules/tasks/task.routes.js';
import userRoutes from './modules/users/user.routes.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(requestLogger);

// Routers
app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.send('modular API working');
});

export default app;