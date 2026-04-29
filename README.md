# Drizzle Notes 🌧️

A full-stack note-taking application built with the MERN stack where users can create, edit, delete, and manage notes with a clean and responsive UI.

## Highlights

🧱 Full-Stack App built with the MERN Stack  
(MongoDB, Express, React, Node.js)

✨ Create, Update, and Delete Notes  
Manage notes with title and description.

🛠️ Fully Functional REST API  
Built and tested with proper routes and controllers.

⚙️ Rate Limiting with Upstash Redis  
Prevents abuse and controls API request limits.

🚀 Responsive UI  
Works across desktop, tablet, and mobile devices.

🌐 API Concepts Covered  
HTTP Methods, Status Codes, CRUD Operations.

📦 Deployment Ready  
Backend deployed on Render.

📚 Beginner-Friendly Project  
Simple project structure and easy to understand.

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- DaisyUI
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis

---

## Project Structure

```bash
DrizzleNotes/
├── backend/
├── frontend/
└── package.json
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

NODE_ENV=development
PORT=5001
```

---

## Run the Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on:

```bash
http://localhost:5001
```

---

## Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Build Project

From root directory:

```bash
npm run build
```

---

## Production Deployment

Backend deployed on Render:

Live URL:

```bash
https://drizzle-notes.onrender.com
```

---

## API Endpoints

### Get all notes

```http
GET /api/notes
```

### Get single note

```http
GET /api/notes/:id
```

### Create note

```http
POST /api/notes
```

### Update note

```http
PUT /api/notes/:id
```

### Delete note

```http
DELETE /api/notes/:id
```

---

## Features

- Create notes
- Edit notes
- Delete notes
- View all notes
- Rate-limited API
- Responsive design
- Production deployment

---

## Author

Built by Barsha Routh
