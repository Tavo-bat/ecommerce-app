# E-Commerce App

Proyecto de práctica para Análisis y Desarrollo de Software. Este repositorio contiene la estructura inicial de un backend bajo el patrón MVC (Model-View-Controller) enfocado en aprender buenas prácticas de configuración de entorno de trabajo y Git.

## Requisitos Previos
- Node.js instalado en el sistema.

## Configuración del Entorno
1. Clonar el repositorio.
2. Instalar las dependencias del proyecto:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` en la raíz del proyecto basándose en el archivo `.env.example`:
   ```bash
   cp .env.example .env
   ```

## Scripts Disponibles

- `npm start`: Levanta el servidor usando Node.
- `npm run dev`: Levanta el servidor en modo desarrollo (reinicia automáticamente ante cambios usando `node --watch`).

## Estructura del Backend (MVC)
La arquitectura está estructurada de la siguiente manera:
- `src/backend/controllers`: Lógica de negocio (controladores).
- `src/backend/models`: Esquemas y modelos de datos.
- `src/backend/routes`: Definición de los endpoints de la API.
- `src/backend/server.js`: Archivo principal de entrada para la aplicación Express.
