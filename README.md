# MERN Task Management System

## Overview

A Role-Based Task Management System built using MERN Stack.

Users can:

* Register
* Login
* Create Tasks
* Update Tasks
* Delete Tasks
* View Own Tasks

Admins can:

* Access Admin Dashboard
* View Analytics
* Monitor Tasks

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

---

## Installation

### Backend

```bash
cd backend
npm install
npm start
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

Create a .env file inside backend:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

---

## Features

* JWT Authentication
* Role Based Authorization
* Protected Routes
* Admin Dashboard
* Task CRUD Operations
* MongoDB Atlas Integration

---

## Author

Amutha
