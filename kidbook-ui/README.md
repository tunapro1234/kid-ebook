# Kidbook UI - Generador de Cuentos Infantiles Personalizados | Personalized Children's Book Generator

Este proyecto contiene la interfaz de usuario (UI) para una aplicación web que genera cuentos infantiles personalizados utilizando inteligencia artificial. La UI permite a los usuarios crear cuentos personalizados con los nombres de sus hijos, seleccionar temas, estilos de ilustración, y realizar pagos para obtener el libro digital o impreso.

This project contains the user interface (UI) for a web application that generates personalized children's books using artificial intelligence. The UI allows users to create customized stories with their children's names, select themes, illustration styles, and make payments to obtain the digital or printed book.

## Características | Features

- Formulario de creación de libros personalizados | Personalized book creation form
- Previsualización de las primeras páginas del libro | Preview of the first pages of the book
- Opción de pago para desbloquear el contenido completo | Payment option to unlock full content
- Opciones de compra digital e impresa | Digital and printed purchase options
- Panel de administración para gestionar pedidos | Admin dashboard to manage orders
- Soporte para idiomas Español e Inglés | Spanish and English language support

## Requerimientos | Requirements

- Docker y Docker Compose | Docker and Docker Compose

## Instrucciones para ejecutar | Running instructions

1. Clona este repositorio | Clone this repository

2. Navega al directorio del proyecto | Navigate to the project directory:
   ```
   cd kidbook-ui
   ```

3. Construye y ejecuta el contenedor Docker | Build and run the Docker container:
   ```
   docker-compose up
   ```

4. Accede a la aplicación en tu navegador | Access the application in your browser:
   ```
   http://localhost:5173
   ```

## Idiomas | Languages

La aplicación soporta Español e Inglés. El idioma se detecta automáticamente basado en la configuración del navegador, pero también se puede cambiar manualmente desde la interfaz.

The application supports Spanish and English. The language is automatically detected based on the browser settings, but it can also be changed manually from the interface.

## Estructura del Proyecto | Project Structure

```
kidbook-ui/
├── public/                 # Archivos estáticos | Static files
├── src/                    # Código fuente | Source code
│   ├── components/         # Componentes reutilizables | Reusable components
│   ├── contexts/           # Contextos de React | React contexts
│   ├── pages/              # Páginas de la aplicación | Application pages
│   ├── assets/             # Imágenes, íconos, etc. | Images, icons, etc.
│   ├── translations.js     # Traducciones | Translations
│   ├── App.jsx             # Componente principal | Main component
│   └── main.jsx            # Punto de entrada de React | React entry point
├── Dockerfile              # Configuración de Docker | Docker configuration
├── docker-compose.yml      # Configuración de Docker Compose | Docker Compose configuration
├── package.json            # Dependencias y scripts | Dependencies and scripts
└── README.md               # Este archivo | This file
```

## Tecnologías utilizadas | Technologies used

- React
- React Router
- Tailwind CSS
- Framer Motion
- Context API (para traducciones | for translations)
- Vite
- Docker

## Notas para el Desarrollo | Development Notes

- Esta es solo la interfaz de usuario (UI). La integración con las APIs de IA (GPT-4o) y procesamiento de pagos debe implementarse por separado.
- Las imágenes de demostración deben añadirse a la carpeta `public/` para ver correctamente los ejemplos.

- This is only the user interface (UI). Integration with AI APIs (GPT-4o) and payment processing must be implemented separately.
- Demo images should be added to the `public/` folder to correctly see the examples. 