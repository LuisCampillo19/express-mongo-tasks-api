# Task Manager API

A robust RESTful API built with **Node.js** and **Express** for managing tasks. This backend service connects to **MongoDB Atlas** to perform full CRUD operations (Create, Read, Update, Delete).

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

## Features

- **Create Task:** Add new tasks with a title and description.
- **Read Tasks:** Retrieve a list of all tasks or get a specific task by ID.
- **Update Task:** Modify existing tasks.
- **Delete Task:** Remove tasks from the database.
- **Database Connection:** Integrated with MongoDB Atlas using Mongoose.

## Tech stack

- **Runtime Environment:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Atlas)
- **ODM:** Mongoose
- **Environment Variables:** dotenv

## Project structure

```bash
├── model/
│   └── taskModel.js    # Mongoose Schema definition
├── routes/
│   └── tasksRoutes.js  # API Routes (GET, POST, PUT, DELETE)
├── .env                # Environment variables - information
├── server.js           # Entry point and Server configuration
└── package.json        # Dependencies and scripts
```
# Gettinng Started

Follow these steps to set up the project locally.

## 1. Clone the repository

```bash
git clone https://github.com/LuisCampillo19/express-mongo-tasks-api.git
```

## 2. install dependencies

Run the following command to install Express, Mongoose, and Dotenv automatically:

```bash
npm install
```

## 3. Configure environment variables

Create a **.env** file in the root directory and add your MongoDB connection string:

```bash
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase
PORT=3001
```

## 4. Run the server

To start the application in development mode (with auto-reload):

```bash
npm run dev
```