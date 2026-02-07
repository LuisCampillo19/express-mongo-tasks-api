import express from 'express'
import router from './routes/tasksRoutes.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config() 

const app = express()
//Midleware
app.use(express.json())
app.use('/tasks', router)

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    console.log('DATABASE MONDO CONECT')
    app.listen(PORT, () => {
    console.log(`Servidor levantado en http://localhost:${PORT}`);
    });
})
.catch(err => console.error(err));