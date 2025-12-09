## 📧 Fullstack Project: Authentication & Email Verification

A professional fullstack application built with **React, Express, Sequelize, and PostgreSQL.**  
This project demonstrates secure user authentication, email verification workflows, password recovery, and deployment-ready architecture ideal for showcasing fullstack skills.

---

## 🌐 Deployment

### 🚀 Backend: Server online with Render
🔗 https://auth-mailer-api.onrender.com

---

### 📄 API Documentation: Postman Collection
🔗 https://clioanahi-4690257.postman.co/documentation/48309056-89b60f1b-5101-40d8-82fa-027d917e66f3/publish?workspaceId=e6eb16e2-0724-445b-bc16-efaab48f6469&authFlowId=f31427f2-2c7f-4fc9-a82f-4156112a6e9e

---

### 🌐 Frontend: App online with Netlify
🔗 https://auth-mailer-api.netlify.app

---

## 🎯 Project Goals

This project was designed to:

- Build a **user authentication system** with email verification before account activation.  
- Implement secure password encryption and token-based login.  
- Provide CRUD endpoints for user management (create, read, update, delete).  
- Deploy the backend on Render and integrate with a React frontend.  
- Document the project professionally with README, `.env.example`, and clear structure for easy cloning and execution.  
- Include optional **password recovery functionality** via email codes.

---

## 🧠 Key Skills Reinforced

- **Fullstack Development:** integrating frontend (React + Vite) with backend (Express + Sequelize + PostgreSQL).  
- **Authentication & Security:** password hashing, email verification, JWT tokens.  
- **Database Modeling:** Sequelize ORM with models for `User` and `EmailCode`.  
- **RESTful API Design:** public and protected endpoints with proper status codes.  
- **Deployment Skills:** backend on Render, frontend on Netlify/Vercel.  
- **Version Control & Documentation:** GitHub usage with `.gitignore`, `.env.example`, and bilingual README.  

---

## 📌 Features

- User registration with email verification.  
- Secure login with JWT tokens.  
- CRUD operations for users.  
- Password recovery via email codes (optional challenge).  
- Protected routes requiring authentication.  
- Deployment-ready with environment variables and documentation.  

---

## 📁 API Endpoints

### Public Endpoints
| Método | Endpoint                | Función |
|--------|-------------------------|---------|
| POST   | `/users`                | Create user and send verification email |
| GET    | `/users/verify/:code`   | Verify user email with code |
| POST   | `/users/login`          | Login with email & password |

### Protected Endpoints
| Método | Endpoint         | Función |
|--------|------------------|---------|
| GET    | `/users/me`      | Return logged-in user |
| GET    | `/users`         | Return all users |
| GET    | `/users/:id`     | Return user by id |
| PUT    | `/users/:id`     | Update user by id |
| DELETE | `/users/:id`     | Delete user by id |

### Optional Challenge: Password Reset
| Método | Endpoint                       | Función |
|--------|--------------------------------|---------|
| POST   | `/users/reset_password`        | Send reset code to user email |
| POST   | `/users/reset_password/:code`  | Reset password with code |

---

## 🗂️ API Models

### User
| Field       | Description |
|-------------|-------------|
| id          | Primary key |
| first_name  | User first name |
| last_name   | User last name |
| email       | User email |
| password    | Encrypted password |
| country     | User country |
| image       | Profile image |
| isVerify    | Boolean, default `false` |

### EmailCode
| Field  | Description |
|--------|-------------|
| id     | Primary key |
| code   | Verification or reset code |
| user_id| Associated user |

---

## 💻🚀 Tech Stack

| Frontend      | Backend       | Deployment | Database   |
|---------------|---------------|------------|------------|
| React 18      | Node.js       | Render     | PostgreSQL |
| Vite          | Express       | Netlify    | Sequelize ORM |
| Axios         | Helmet        | Postman    | pg / pg-hstore |
| Bootstrap     | Morgan        |            |            |
| Bootswatch    | CORS          |            |            |

---

## 🗂️ Project Structure

```bash
📁 S04E04
|   ├── 📁 email-api
│   |   └── 📁 node_modules/
│   |   └── 📁 src/
|   │   |    └── 📁 config/
│   |   |    |    └── env.js
|   │   |    └── 📁 controllers/
│   |   |    |    └── emails.controller.js
│   |   |    |    └── users.controller.js
|   │   |    └── 📁 db/
│   |   |    |    └── connect.js
|   │   |    └── 📁 mails/
│   |   |    |    └── mailer.js
|   │   |    └── 📁 middlewares/
│   |   |    |    └── auth.js
│   |   |    |    └── catchError.js
│   |   |    |    └── errorHandler.js
|   │   |    └── 📁 models/
│   |   |    |    └── emailcode.model.js
│   |   |    |    └── user.model.js
|   │   |    └── 📁 routes/
│   |   |    |    └── emails.routes.js
│   |   |    |    └── index.js
│   |   |    |    └── users.routes.js
│   |   |    └── app.js
│   |   |    └── server.js
|   |   └── .env
|   |   └── .env.example
|   |   └── package-lock.json
|   |   └── package.json
|   ├── 📁 entregable4-frontend-2-main
│   |    └── 📁 node_modules/
│   |    └── 📁 src/
|   │    |    └── 📁 assets/
│   |    |    |    └── login-background.mp4
|   │    |    └── 📁 auth/
|   │    |    |    └── 📁 pages/
│   |    |    |    |    └── 📁 AuthLayout/
│   |    |    |    |    |    └── AuthLayout.component.jsx
│   |    |    |    |    |    └── AuthLayout.styles.css
│   |    |    |    |    └── 📁 ChangePassword/
│   |    |    |    |    |    └── ChangePassword.component.jsx
│   |    |    |    |    └── 📁 Login/
│   |    |    |    |    |    └── Login.component.jsx
│   |    |    |    |    |    └── Login.styles.css
│   |    |    |    |    └── 📁 ResetPassword/
│   |    |    |    |    |    └── ResetPassword.component.jsx
│   |    |    |    |    └── 📁 SignUp/
│   |    |    |    |    |    └── SignUp.component.jsx
│   |    |    |    |    |    └── SignUp.styles.css
│   |    |    |    |    └── 📁 VerificateEmail/
│   |    |    |    |    |    └── VerificateEmail.component.jsx
│   |    |    |    |    |    └── VerifyEmail.styles.css
│   |    |    |    |    └── authRouter.jsx
│   |    |    |    |    └── authSlice.jsx
|   │    |    └── 📁 reduxStore/
|   │    |    |    └── store.js
|   │    |    └── 📁 shared/
|   │    |    |    └── 📁 Notification/
│   |    |    |    |    └── Notification.component.jsx
│   |    |    |    |    └── Notification.styles.css
│   |    |    |    |    └── notificationSlice.jsx
|   │    |    |    └── 📁 ProtectedRoute/
│   |    |    |    |    └── ProtectedRoute.component.jsx
|   │    |    └── 📁 users/
|   │    |    |    └── 📁 components/
│   |    |    |    |    └── 📁 LoggedUserCard/
│   |    |    |    |    |    └── LoggedUserCard.component.jsx
│   |    |    |    |    |    └── LoggedUserCard.styles.css
│   |    |    |    |    └── 📁 NavBar/
│   |    |    |    |    |    └── NavBar.component.jsx
│   |    |    |    |    |    └── NavBar.styles.css
|   │    |    |    └── 📁 pages/
│   |    |    |    |    └── 📁 AllUsers/
│   |    |    |    |    |    └── AllUsers.component.jsx
│   |    |    |    |    └── 📁 UsersLayout/
│   |    |    |    |    |    └── UsersLayout.component.jsx
│   |    |    |    |    |    └── UsersLayout.styles.css
|   │    |    |    └── userRouter.jsx
|   │    |    └── 📁 utils/
│   |    |    |    └── axios.js
|   │    |    └── App.css
|   │    |    └── App.jsx
|   │    |    └── router.jsx
|   │    |    └── main.jsx
│   |    └── .env
│   |    └── .env.example
|   |    └── .eslintrc.cjs
│   |    └── index.html
│   |    └── package-lock.json
│   |    └── package.json
│   |    └── vite.config.js
|   └── .gitignore
```
---

## ⚙️ Setup & Installation

### 🔧 Backend Setup

1. Clone this repository:
```bash
git clone https://github.com/your-username/Auth-Mailer-API.git
```

2. Change directory to backend:
```bash
cd S04E04/email-api
```

3. Install dependencies:
```bash
npm install
```

4. Configure environment variables:
- Copy .env.example to .env
- Modify the necessary variable values.
- Example configuration:
  
```bash
NODE_ENV=development
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/emails_db
EMAIL=
GOOGLE_APP_PASSWORD=
SECRET_KEY=
EXPIRE_IN=1d
```

5. Run the server in development mode:
```bash
npm run dev
```

---

1. Change directory to frontend:
```bash
cd S04E04/entregable4-frontend-2-main
```

2. Install dependencies:
```bash
npm install
```

3. Run the frontend:
```bash
npm run dev
```

---

## 🎨Author
Developed as part of the Node.js & Backend module, with the goal of consolidating skills in authentication, email workflows, frontend–backend integration, cloud deployment, and professional documentation as part of a fullstack project.
