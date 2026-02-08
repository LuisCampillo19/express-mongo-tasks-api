# Task Manager API

A robust RESTful API built with **Node.js** and **Express** for managing tasks and users. This backend service implements a modular architecture and connects to **MongoDB Atlas** via Mongoose to perform full CRUD operations.

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)

## Features

- **Modular Architecture:** Organized code with controllers, services, models, and routes.
- **Task Management:** Create, read, update, and delete tasks.
- **User Management:** User registration and management.
- **Data Validation:** Robust schemas using Mongoose (required fields, unique constraints).
- **Error Handling:** Centralized error handling for async operations.
- **Environment Security:** Configuration using `dotenv`.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Tools:** Nodemon, VS Code (REST Client)

## Project Structure

```bash
src/
├── common/
│   └── middlewares/    # Global middlewares (Logger)
├── config/
│   └── database.js     # Database connection logic
├── modules/
│   ├── tasks/          # Task Module (Controller, Model, Routes, Service)
│   └── users/          # User Module (Controller, Model, Routes, Service)
├── app.js              # Express app configuration
└── server.js           # Entry point
.env                    # Environment variables
request.http            # Endpoint testing file
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

## API endpoints

### tasks (/api/tasks)
| Method | Endpoint     | Description                          |
| :----- | :----------- | :----------------------------------- |
| GET    | /api/tasks   | Get all tasks                        |
| GET    | /api/tasks/1 | Get a specific task by ID            |
| POST   | /api/tasks   | Create a new task                    |
| PUT    | /api/tasks/1 | Update an existing task              |
| DELETE | /api/tasks/1 | Delete a task                        |

### users (/api/users)
| Method | Endpoint     | Description                          |
| :----- | :----------- | :----------------------------------- |
| GET    | /api/tasks   | Retrieve all users                   |
| POST   | /api/tasks   | Register a new user                  |
