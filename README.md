## 📧 Fullstack Project: Authentication & Email Verification <br/>  <br/> <p align="right">[![SecOps: CodeQL Analysis](https://img.shields.io/badge/Analysis-CodeQL--SecOps-F5F5F5?style=for-the-badge&logo=postgresql&logoColor=black&labelColor=A9A9A9)](https://github.com/Clic-stack/Auth-Mailer-API/actions)</p> <p align="right">[![Real-World Integration Tests](https://img.shields.io/badge/Tests-Real--World%20Integration-FFD700?style=for-the-badge&logo=postgresql&logoColor=FFD700&labelColor=010B13)](https://github.com/Clic-stack/Auth-Mailer-API/actions)</p> <p align="right">[![Continuous Integration (CI/CD) Tests](https://img.shields.io/badge/Tests-CI--Continuous%20Integration-FFFFFF?style=for-the-badge&logo=postgresql&logoColor=003366&labelColor=FFFDD0)](https://github.com/Clic-stack/Auth-Mailer-API/actions)</p> 


> [!TIP]
> Quick Setup Note: This project includes enviroment variables and configures instructions into .env.example file for development and testing environments, (remember all enviroment values is with your credentials). This facilitates rapid deployment and ensures the test suite runs out-of-the-box without extra security overhead.
[![Auth Mailer API CI/CD](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/ci.yml)
[![SecOps: CodeQL Analysis](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/codeql.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/codeql.yml)
[![SecOps: DAST Dynamic Scan](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/dast.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/dast.yml)
[![API Contract: Postman Validation](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/postman-validation.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/postman-validation.yml)


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

##🟢 Technical Quality Assurance (QA & SecOps)

**What do the badges at the beginning of this project mean?**
To ensure **Auth Mailer API** meets banking-grade standards, I have implemented 4 automated workflows (Pipelines) that run on every code change:

1. **Continuous Integration (CI - Jest):** Runs functional tests to ensure registration, login, and email delivery work perfectly.
2. **Static Security (SAST - CodeQL):** A professional-grade scanner that looks for hidden vulnerabilities in the code (such as potential data theft or SQL injections).
3. **Dynamic Security (DAST - OWASP ZAP):** A "simulated attack" on the live server to verify there are no open backdoors.
4. **Contract Validation (Postman/Newman):** Verifies that the communication between the server and the app is always accurate and error-free.

- **Green Badge (Passing):** The code has passed all 4 layers of auditing and is 100% safe for use.
- **Red Badge (Failing):** The system detected an error or risk and automatically blocked the update to protect users.

  ✅ **Unit Testing:** Implemented with **Jest**.
  ✅ **Security Audit:** Automated via **CodeQL**.
  ✅ **Vulnerability Scanning:** Performed using **OWASP ZAP**.
  ✅ **API Testing:** Validated with **Newman (Postman CLI)**.
  ✅ **DoS Protection:** Implemented through **Rate Limiting**.
  ✅ **Continuous Deployment:** Automated via **Render** webhooks.

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
- **Protection against DoS attacks**
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

## 🛡️ Security & Quality Assurance

This project follows a SecOps approach with automated pipelines:

- **SAST (Static Application Security Testing):** Continuous code analysis via **CodeQL** to detect vulnerabilities (SQL Injection, XSS, etc.). 
- **DAST (Dynamic Application Security Testing):** Active scanning of the live production server using **OWASP ZAP**.
- **API Contract Testing:** Automated route validation using **Newman (Postman CLI)** to ensure response integrity.
- **Rate Limiting:** Implemented middleware to mitigate DoS and Brute Force attacks.

---

## 🧪 Professional Testing Suite (CI/CD)

The reliability of **Auth-Mailer-API** is backed by an automated testing workflow. Using **Jest** and **Supertest**, the project implements **9 strategic tests** covering:

- **Authentication Flow:** Validating secure login, JWT token generation, and password hashing.
- **User Lifecycle:** Full CRUD operations for user management and profile updates.
- **Email Verification Logic:** Ensuring verification codes are generated and processed correctly.
- **Automated Workflow:** Every `push` or `pull` request triggers the **GitHub Actions** pipeline, ensuring code stability before deployment.
  
To run the tests locally:
```bash
cd email-api
npm test
```

---

## 💻🚀 Tech Stack

| Frontend      | Backend       | Deployment | Database       | Security & Testing |
|---------------|---------------|------------|----------------|--------------------|
| React 18      | Node.js       | Render     | PostgreSQL     | Jest               |
| Vite          | Express       | Netlify    | Sequelize ORM  | Supertest          |
| Axios         | Helmet        | Postman    | pg / pg-hstore | CodeQL (SAST)      |
| Bootstrap     | Morgan        |            |                | OWASP ZAP (DAST)   |
| Bootswatch    | CORS          |            |                | Newman (Postman CLI) |

---

## 📁 API Endpoints

### Public Endpoints
| Method | Endpoint                | Function |
|--------|-------------------------|---------|
| POST   | `/users`                | Create user and send verification email |
| GET    | `/users/verify/:code`   | Verify user email with code |
| POST   | `/users/login`          | Login with email & password |

### Protected Endpoints
| Method | Endpoint         | Function |
|--------|------------------|---------|
| GET    | `/users/me`      | Return logged-in user |
| GET    | `/users`         | Return all users |
| GET    | `/users/:id`     | Return user by id |
| PUT    | `/users/:id`     | Update user by id |
| DELETE | `/users/:id`     | Delete user by id |

### Optional Challenge: Password Reset
| Method | Endpoint                       | Function |
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

## 🧪 Test Coverage

<p align="center">
<img width="258" height="93" alt="image" src="https://github.com/user-attachments/assets/db9906b8-70b6-4291-a21e-1dcc6c2d142e" />
</p>

The following endpoints are tested:
## Users
- `GET /users` – Retrieve all users (Protected route).
- `POST /users` – Create a new user (triggers verification email).
- `GET /users/:id` – Retrieve a specific user by ID.
- `PUT /users/:id` – Update user profile information.
- `DELETE /users/:id` – Remove a user from the database.
## Authentication & Security
- `GET /users/me` – Validate token and return the currently logged-in user.
- `POST /users/login` – Secure login with password validation and JWT generation.
## Email Verification & Recovery
- `GET /users/verify/:code` – Validate the unique code sent to the user's email.
- `POST /users/reset_password` – Initiate the password recovery flow.
---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
    "start": "node src/server.js",
    "test": "jest --detectOpenHandles --forceExit"
}
```

---

## 🗂️ Project Structure

```bash
📁 S04E04
|   ├── 📁 .github
│   |   └── 📁 workflows/
│   |   |    └── ci.yml
│   |   |    └── codeql.yml
│   |   |    └── dast.yml
│   |   |    └── postman-validation.yml
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
│   |   |    |    └── rateLimiter.js
|   │   |    └── 📁 models/
│   |   |    |    └── emailcode.model.js
│   |   |    |    └── user.model.js
|   │   |    └── 📁 routes/
│   |   |    |    └── emails.routes.js
│   |   |    |    └── index.js
│   |   |    |    └── users.routes.js
│   |   |    └── app.js
│   |   |    └── server.js
│   |   └── 📁 tests/
│   |   |    └── user.test.js
|   |   └── .env
|   |   └── .env.example
|   |   └── auth-mailer.json
|   |   └── jest.config.js
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
|   └── CONTRIBUTING.md
|   └── README.md
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

## 🚀 Future Roadmap (Data & MLOps)

- **ETL Pipeline:** Integration for historical login data analysis to detect anomalous patterns.
- **Predictive Security:** Implementation of a Machine Learning model to score login attempt risks based on geolocation and frequency.
- **Dockerization:** Containerizing the entire stack for orchestrated scaling.

---

## 🎨Author
Developed as part of the Node.js & Backend module, with the goal of consolidating skills in authentication, email workflows, frontend–backend integration, cloud deployment, and professional documentation as part of a fullstack project.

🔽 **Versión en Español** 🔽

## 📧 Proyecto Fullstack: Autenticación y Verificación por Email <br/> <br/> <p align="right">[![Continuous Integration (CI/CD) Tests](https://img.shields.io/badge/Pipeline-Integración%20Continua%20(CI)-FFFFFF?style=for-the-badge&logo=postgresql&logoColor=003366&labelColor=FFFDD0)](https://github.com/Clic-stack/Auth-Mailer-API/actions)</p> <br/> <p align="right">[![Pruebas de Integración de Escenario Real](https://img.shields.io/badge/Pruebas-Integración%20de%20Escenario%20Real-FFD700?style=for-the-badge&logo=postgresql&logoColor=FFD700&labelColor=000000)](https://github.com/Clic-stack/Auth-Mailer-API/actions)</p> 


> [!TIP]
>  Nota para Configuración Rápida: Este proyecto incluye variables de entorno e instrucciones de configuración en el archivo `.env.example` para entornos de desarrollo y pruebas, (recuerda que todos los valores deben corresponder a tus propias credenciales). Esto facilita un despliegue rápido y garantiza que la suite de pruebas funcione de inmediato (out-of-the-box) sin configuraciones de seguridad adicionales.
[![Auth Mailer API CI/CD](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/ci.yml)
[![SecOps: CodeQL Analysis](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/codeql.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/codeql.yml)
[![SecOps: DAST Dynamic Scan](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/dast.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/dast.yml)
[![API Contract: Postman Validation](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/postman-validation.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/Auth-Mailer-API/actions/workflows/postman-validation.yml)

Una aplicación fullstack profesional construida con React, Express, Sequelize y PostgreSQL. 
Este proyecto implementa flujos seguros de autenticación de usuarios, verificación de cuenta por correo electrónico, recuperación de contraseñas y una arquitectura lista para despliegue.

<img width="1861" height="991" alt="image" src="https://github.com/user-attachments/assets/6adfad9f-3bb0-4740-a4a4-8cefd49dfcc6" />

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

##🟢 Garantía de Calidad Técnica y Seguridad (QA & SecOps)

**¿Qué significan los distintivos (badges) al inicio de este proyecto?**
Para garantizar que **Auth Mailer API** cumpla con estándares de nivel bancario, he implementado 4 flujos de trabajo automatizados (Pipelines) que se ejecutan en cada cambio de código:

1. **Integración Continua (CI - Jest):** Ejecuta pruebas funcionales para asegurar que el registro, el login y el envío de correos funcionen perfectamente.
2. **Seguridad Estática (SAST - CodeQL):** Un escáner de nivel profesional que busca vulnerabilidades ocultas en el código (como posibles robos de datos o inyecciones SQL).
3. **Seguridad Dinámica (DAST - OWASP ZAP):** Un "ataque simulado" al servidor en vivo para verificar que no existan puertas traseras abiertas.
4. **Validación de Contrato (Postman/Newman):** Verifica que la comunicación entre el servidor y la aplicación sea siempre exacta y sin errores de datos.

- **Distintivo Verde (Passing):** El código ha superado las 4 capas de auditoría y es 100% seguro para su uso.
- **Distintivo Rojo (Failing):** El sistema detectó un error o riesgo y bloqueó la actualización automáticamente para proteger a los usuarios.

  ✅ **Pruebas Unitarias:** Implementadas con Jest.
  ✅ **Auditoría de Seguridad:** Automatizada con CodeQL.
  ✅ **Escaneo de Vulnerabilidades:** Realizado con OWASP ZAP.
  ✅ **Pruebas de API:** Validadas con Newman (Postman CLI).
  ✅ **Protección DoS:** Implementada mediante Rate Limiting.
  ✅ **Despliegue Continuo:** Automatizado mediante **webhooks de Render**.

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
- **Mitigación de ataques de Denegación de Servicio (DoS)** 
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

## 🛡️ Seguridad y Control de Calidad

Este proyecto sigue un enfoque SecOps mediante pipelines automatizados:

- **SAST (Pruebas de Seguridad de Aplicaciones Estáticas):** Análisis continuo del código mediante **CodeQL** para detectar vulnerabilidades (Inyección SQL, XSS, etc.).
- **DAST (Pruebas de Seguridad de Aplicaciones Dinámicas):** Escaneo activo del servidor de producción en vivo utilizando **OWASP ZAP**.
- **Pruebas de Contrato de API:** Validación automatizada de rutas mediante **Newman (Postman CLI)** para garantizar la integridad de las respuestas.
- **Limitación de Tasa (Rate Limiting):** Middleware implementado para mitigar ataques **DoS** (Denegación de Servicio) y de **Fuerza Bruta**.
  
---

## 🧪 Suite de Pruebas Profesionales (CI/CD)
La confiabilidad de **Auth-Mailer-API** está respaldada por un flujo de trabajo de pruebas automatizadas. Utilizando **Jest y Supertest**, el proyecto implementa **9 pruebas estratégicas** que cubren:

- **Flujo de Autenticación:** Validación de inicio de sesión seguro, generación de tokens JWT y cifrado de contraseñas.
- **Ciclo de Vida del Usuario:** Operaciones CRUD completas para la gestión de usuarios y actualizaciones de perfil.
- **Lógica de Verificación:** Garantizar que los códigos de verificación se generen y procesen correctamente.
- **Flujo Automatizado:** Cada `push` o `pull request` activa el pipeline de **GitHub Actions**, asegurando la estabilidad del código antes del despliegue.
  
Para ejecutar las pruebas localmente:
```bash
cd email-api
npm test
```

---

## 💻🚀 Stack Tecnológico

| Frontend      | Backend       | Despliegue | Base de Datos  | Pruebas y Seguridad |
|---------------|---------------|------------|----------------|--------------------|
| React 18      | Node.js       | Render     | PostgreSQL     | Jest               |
| Vite          | Express       | Netlify    | Sequelize ORM  | Supertest          |
| Axios         | Helmet        | Postman    | pg / pg-hstore | CodeQL (SAST)      |
| Bootstrap     | Morgan        |            |                | OWASP ZAP (DAST)   |
| Bootswatch    | CORS          |            |                | Newman (Postman CLI) |

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

## 🧪 Cobertura de Test

<p align="center">
<img width="258" height="93" alt="image" src="https://github.com/user-attachments/assets/db9906b8-70b6-4291-a21e-1dcc6c2d142e" />
</p>

Los siguientes endpoints fueron testeados
## Users
- `GET /users` – Regresa todos los usuarios (ruta protegida).
- `POST /users` – Crea un nuevo usuario (require verificación vía email).
- `GET /users/:id` – Regresa un usuario específico por ID.
- `PUT /users/:id` – Actualiza el perfil de un usuario.
- `DELETE /users/:id` – Elimina un usuario de la base de datos.
## Authentication & Security
- `GET /users/me` – Valida el token y retorna la información del usuario con sesión activa.
- `POST /users/login` – Inicio de sesión seguro con validación de contraseña y generación de JWT.
## Email Verification & Recovery
- `GET /users/verify/:code` – Valida el código único enviado al correo electrónico del usuario.
- `POST /users/reset_password` – Inicia el flujo de recuperación de contraseña.
---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
    "start": "node src/server.js",
    "test": "jest --detectOpenHandles --forceExit"
}
```

---


## 🗂️ Estructura de Proyecto

```bash
📁 S04E04
|   ├── 📁 .github
│   |   └── 📁 workflows/
│   |   |    └── ci.yml
│   |   |    └── codeql.yml
│   |   |    └── dast.yml
│   |   |    └── postman-validation.yml
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
│   |   |    |    └── rateLimiter.js
|   │   |    └── 📁 models/
│   |   |    |    └── emailcode.model.js
│   |   |    |    └── user.model.js
|   │   |    └── 📁 routes/
│   |   |    |    └── emails.routes.js
│   |   |    |    └── index.js
│   |   |    |    └── users.routes.js
│   |   |    └── app.js
│   |   |    └── server.js
│   |   └── 📁 tests/
│   |   |    └── user.test.js
|   |   └── .env
|   |   └── .env.example
|   |   └── auth-mailer.json
|   |   └── jest.config.js
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
|   └── CONTRIBUTING.md
|   └── README.md
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

## 🚀 Hoja de Ruta Futura (Data & MLOps)

- **Pipeline ETL:** Integración para el análisis de datos históricos de inicio de sesión con el fin de detectar patrones anómalos.
- **Seguridad Predictiva:** Implementación de un modelo de **Machine Learning** para calificar los riesgos de intentos de inicio de sesión basados en geolocalización y frecuencia.
- **Dockerización:** Contenedorización de todo el stack tecnológico para permitir un escalado orquestado.

--

## 🎨Autor
Desarrollado por Clio como parte del módulo de Node.js y Backend, consolidando flujos de trabajo profesionales y entornos reproducibles.
