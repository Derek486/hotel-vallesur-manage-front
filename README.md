# Hotel Vallesur - Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

## 📌 Descripción del Proyecto

Este repositorio contiene el frontend del sistema de gestión de departamentos *Hotel Vallesur*. Desarrollado con **React.js** y **Vite**, ofrece una interfaz moderna y optimizada para la gestión de usuarios, departamentos, inquilinos, contratos de alquiler y pagos.

> [!NOTE]
> Para más detalles sobre el proyecto completo, visita: [Hotel Vallesur Management Stack](https://github.com/Derek486/hotel-vallesur-manage-stack.git)

## 🚀 Tecnologías Utilizadas

- **Framework:** React.js
- **Estilos:** Tailwind CSS
- **Ruteo:** React Router
- **Manejo de Estado:** Context API
- **Autenticación:** JWT
- **HTTP Client:** Axios

## 📂 Estructura del Proyecto

```bash
src/
├── assets/           # Recursos estáticos (imágenes, íconos)
├── components/       # Componentes reutilizables
├── context/          # Contextos globales (Toast, autenticación)
├── hooks/            # Custom Hooks
├── layouts/          # Estructuras de diseño reutilizables
├── pages/            # Páginas principales
│   ├── auth/         # Vistas de autenticación
│   └── dashboard/    # Vistas de gerentes y agentes
├── routes/           # Definición de rutas
├── services/         # Conexión con el backend (APIs)
└── main.jsx          # Punto de entrada de la aplicación
```

## 📌 Funcionalidad del Frontend

### 🏢 Gestión de Departamentos
✔ Visualización y edición de departamentos
✔ Registro de nuevos departamentos

### 👥 Gestión de Usuarios y Agentes
✔ Inicio de sesión y autenticación JWT
✔ Administración de agentes inmobiliarios

### 📝 Gestión de Contratos e Inquilinos
✔ Creación, edición y consulta de contratos de alquiler
✔ Registro de inquilinos y asignación a departamentos

### 💰 Gestión de Pagos
✔ Registro y visualización de pagos de alquiler
✔ Descarga de reportes en PDF

## 🔧 Instalación y Configuración

### 🖥 Requisitos Previos
- Node.js 18+
- Vite

### 🚀 Instalación y Ejecución

```sh
# Clonar el repositorio
$ git clone https://github.com/Derek486/hotel-vallesur-manage-front.git
$ cd hotel-vallesur-manage-front

# Instalar dependencias
$ npm install

# Ejecutar en modo desarrollo
$ npm run dev
```

## 📜 API Endpoints (Conexión al Backend)

El frontend se conecta al backend usando las siguientes APIs:

```javascript
export const API_HOST = 'localhost:9090';
export const API_URL = `http://${API_HOST}/api/v1`;
```

### 📌 Autenticación
```javascript
export const login = (credentials) => api.post('/auth/login', credentials);
export const getUser = () => api.get('/auth/user');
export const updateUser = (data) => api.put('/auth/user', data);
export const updatePassword = (data) => api.put('/auth/password', data);
```

### 📌 Gestión de Departamentos
```javascript
export const listarDepartamentos = () => api.get('/departamentos');
export const crearDepartamento = (nuevoDepartamento) => api.post('/departamentos', nuevoDepartamento);
export const actualizarDepartamento = (id, datos) => api.put(`/departamentos/${id}`, datos);
export const borrarDepartamento = (id) => api.delete(`/departamentos/${id}`);
```

### 📌 Gestión de Contratos e Inquilinos
```javascript
export const listarContratos = () => api.get('/contratoalquileres');
export const guardarContrato = (data) => api.post('/contratoalquileres', data);
export const listarInquilinos = () => api.get('/inquilinos');
export const crearInquilino = (data) => api.post('/inquilinos', data);
```

### 📌 Gestión de Pagos
```javascript
export const listarPagoAlquiler = () => api.get('/pagoalquiler');
export const crearPagoAlquiler = (data) => api.post('/pagoalquiler', data);
export const borrarPagoAlquiler = (id) => api.delete(`/pagoalquiler/${id}`);
```

## 📜 Dependencias Importantes (package.json)

```json
{
  "dependencies": {
    "axios": "^1.6.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "react-hot-toast": "^2.4.1",
    "tailwindcss": "^3.3.5"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "eslint": "^8.53.0"
  }
}
```