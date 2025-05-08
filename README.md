# Atlas WordPress with Faust.js

Este proyecto es una implementación de WordPress headless utilizando Faust.js como framework de desarrollo frontend.

## Tecnologías Utilizadas

### Core
- [Faust.js](https://faustjs.org/) (v3.1.0) - Framework para WordPress Headless
- [Next.js](https://nextjs.org/) (v14.2.14) - Framework de React para producción
- [React](https://reactjs.org/) (v18.3.1) - Biblioteca JavaScript para interfaces de usuario
- [WordPress](https://wordpress.org/) - CMS Headless (Backend)

### Principales Dependencias
- [@apollo/client](https://www.apollographql.com/docs/react/) (v3.10.4) - Cliente GraphQL
- [@aprende-com/design-system](https://www.npmjs.com/package/@aprende-com/design-system) (v1.1.3) - Sistema de diseño de Aprende
- [@faustwp/blocks](https://faustjs.org/docs/blocks) (v4.0.0) - Bloques de WordPress para Faust.js
- [GraphQL](https://graphql.org/) (v16.8.1) - Lenguaje de consulta para APIs
- [Formik](https://formik.org/) (v2.4.6) - Manejo de formularios en React
- [SASS](https://sass-lang.com/) (v1.77.3) - Preprocesador CSS

## Requisitos del Sistema

- Node.js >= 18
- npm >= 8
- WordPress instalado y configurado como headless CMS

## Inicio Rápido con Faust.js

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd atlas-wp
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # O usando el script con variables de entorno
   npm run install:with-env
   ```

3. **Configurar variables de entorno**
   - Copia el archivo `.env.example` a `.env.local`
   - Actualiza las variables con tus credenciales de WordPress

4. **Generar tipos GraphQL**
   ```bash
   npm run generate
   ```

5. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:3000`

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run generate` - Genera los tipos GraphQL
- `npm run stylesheet` - Genera la hoja de estilos global
- `npm run start` - Inicia el servidor de producción

## Desarrollo

Para información detallada sobre el desarrollo y manejo del contenido, consulta [DEVELOPMENT.md](DEVELOPMENT.md).

## Atlas Content Modeler (ACM)

El proyecto utiliza ACM para la gestión de modelos de contenido. Para importar/exportar blueprints de ACM:

### Importación
1. Crear un sitio WordPress limpio o usar FakerPress para limpiar la base de datos
2. Instalar y activar Atlas Content Modeler
3. Ejecutar: `wp acm blueprint import <URL_TO_ZIP>`

### Exportación
1. Limpiar contenido inicial de WordPress
2. Ejecutar el comando de exportación (ver DEVELOPMENT.md para más detalles)
3. Reemplazar el archivo `acm-blueprint.zip` existente