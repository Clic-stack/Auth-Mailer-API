## 📧 Fullstack Project: Authentication & Email Verification

A professional fullstack application built with **React, Express, Sequelize, and PostgreSQL.**  
This project demonstrates secure user authentication, email verification workflows, password recovery, and deployment-ready architecture ideal for showcasing fullstack skills.

<img width="1861" height="991" alt="image" src="https://github.com/user-attachments/assets/6adfad9f-3bb0-4740-a4a4-8cefd49dfcc6" />

---

## 📊 Database Architecture

``` mermaid
erDiagram
    USER ||--o| EMAIL_CODE : "generates"
    
    USER {
        int id PK
        string first_name
        string last_name
        string email UK
        string password
        string country
        string image
        boolean isVerify
    }

    EMAIL_CODE {
        int id PK
        string code
        int userId FK
    }
```  

---

## 🌐 Deployment

### 🚀 Backend: Server online with Render
🔗 https://auth-mailer-api.onrender.com

---

### 📄 API Documentation: Postman Collection
🔗 https://documenter.getpostman.com/view/48309056/2sB3dQwAK2

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

🔽 **Versión en Español** 🔽

## 📧 Proyecto Fullstack: Autenticación y Verificación por Email

Una aplicación fullstack profesional construida con React, Express, Sequelize y PostgreSQL. 
Este proyecto implementa flujos seguros de autenticación de usuarios, verificación de cuenta por correo electrónico, recuperación de contraseñas y una arquitectura lista para despliegue.

<img width="1861" height="991" alt="image" src="https://github.com/user-attachments/assets/6adfad9f-3bb0-4740-a4a4-8cefd49dfcc6" />

---

## 📊 Arquitectura de la Base de Datos

``` mermaid
erDiagram
    USER ||--o| EMAIL_CODE : "generates"
    
    USER {
        int id PK
        string first_name
        string last_name
        string email UK
        string password
        string country
        string image
        boolean isVerify
    }

    EMAIL_CODE {
        int id PK
        string code
        int userId FK
    }
```  

---

## 🌐 Despliegue

### 🚀 Backend: Servidor en línea con Render
🔗 https://auth-mailer-api.onrender.com

---

### 📄 Documentación de la API: Colección de Postman
🔗 https://documenter.getpostman.com/view/48309056/2sB3dQwAK2

---

### 🌐 Frontend: Aplicación en línea con Netlify
🔗 https://auth-mailer-api.netlify.app

---

## 🎯 Objetivos del Proyecto

Este proyecto fue diseñado para:

- Construir un **sistema de autenticación de usuarios** con verificación vía email antes de activar la cuenta.  
- Implementar cifrado seguro de contraseñas y login basado en tokens (**JWT**).
- Proveer endpoints CRUD completos para la gestión de usuarios.
- Integrar un frontend en React con una API desplegada en Render.
- Documentar el proyecto profesionalmente para facilitar su clonación y ejecución.

---

## 🧠 Habilidades Reforzadas

- **Desarrollo Full Stack:** Integrando frontend (React + Vite) con backend (Express + Sequelize + PostgreSQL).  
- **Autenticación y Seguridad:** Contraseña hasheada, Verificación de email, tokens de JWT.  
- **Modelado de Base de Datos:** Uso de Sequelize ORM para relaciones entre `User` y `EmailCode`.  
- **Diseño de API RESTful:** Endpoints públicos y protegidos con códigos de estado HTTP correctos.  
- **Habilidades de Despliegue:** backend desplegada en Render y frontend en Netlify/Vercel.  

---

## 📌 Funcionalidades Principales

- Registro de usuario con envío automático de correo de verificación.
- Login seguro que valida si la cuenta ha sido verificada.
- Operaciones CRUD completas para usuarios.
- Reto Opcional: Recuperación de contraseña mediante códigos enviados por email.
- Rutas protegidas que requieren token de autenticación.  

---

## 📁 Endpoints de API

### Endpoints Públicos
| Método | Endpoint                | Función |
|--------|-------------------------|---------|
| POST   | `/users`                | Create user and send verification email |
| GET    | `/users/verify/:code`   | Verify user email with code |
| POST   | `/users/login`          | Login with email & password |

### Protected Endpoints
| Método | Endpoint         | Función |
|--------|------------------|---------|
| GET    | `/users/me`      | Regresa un usuario logueado |
| GET    | `/users`         | Regresa todos los usuarios |
| GET    | `/users/:id`     | Regresa un usuario por id |
| PUT    | `/users/:id`     | Actualiza un usuario por id |
| DELETE | `/users/:id`     | Elimina un usuario por id |

### Reto Opcional: Cambiar Contraseña
| Método | Endpoint                       | Función |
|--------|--------------------------------|---------|
| POST   | `/users/reset_password`        | Envíar código para el cambio de contraseña al email del usuario |
| POST   | `/users/reset_password/:code`  | Cambiar contraseña con el código |

---

## 🗂️ Modelos de la API

### Uusuario
| Campo       | Descripción |
|-------------|-------------|
| id          | Llave Primaria |
| first_name  | Nombre de Usuario |
| last_name   | Apellido de Usuario |
| email       | Email de Usuario |
| password    | Contraseña Encriptada |
| country     | País de Usuario |
| image       | Imagen de Perfil |
| isVerify    | Dato booleano, por defecto `false` |

### Código de Email
| Campo  | Descripción |
|--------|-------------|
| id     | Llave Primaria |
| code   | Verificación o Cambio de código |
| user_id| Usuario Asociado |

---

## 💻🚀 Tech Stack

| Frontend      | Backend       | Despliegue | Base de Datos |
|---------------|---------------|------------|------------|
| React 18      | Node.js       | Render     | PostgreSQL |
| Vite          | Express       | Netlify    | Sequelize ORM |
| Axios         | Helmet        | Postman    | pg / pg-hstore |
| Bootstrap     | Morgan        |            |            |
| Bootswatch    | CORS          |            |            |

---

## 🗂️ Estructura de Proyecto

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

## ⚙️ Configuración e Instalación

### 🔧 Configuración de Backend

1. Clona este repositorio:
```bash
git clone https://github.com/your-username/Auth-Mailer-API.git
```

2. Cambia directorio a backend:
```bash
cd S04E04/email-api
```

3. Instala dependencias:
```bash
npm install
```

4. Configura las variables de entorno:
- Copia .env.example a .env
- Modifica los valores de las variables necesarias.
- Ejemplo de Configuración:
  
```bash
NODE_ENV=development
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/emails_db
EMAIL=
GOOGLE_APP_PASSWORD=
SECRET_KEY=
EXPIRE_IN=1d
```

5. Corre el servidor en modo desarrollo:
```bash
npm run dev
```
---

🎨 Configuración de Frontend

1. Cambia el directorio a frontend:
```bash
cd S04E04/entregable4-frontend-2-main
```

2. Instala dependencias:
```bash
npm install
```

3. Corre frontend:
```bash
npm run dev
```

---

## 🎨Autor
Desarrollado por Clio como parte del módulo de Node.js y Backend, consolidando flujos de trabajo profesionales y entornos reproducibles.
