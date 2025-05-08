# Atlas WordPress Theme with Faust.js

Este repositorio contiene el tema de WordPress desarrollado con Faust.js para Atlas.

## Tecnologías Utilizadas

- [Faust.js](https://faustjs.org/) - Framework headless para WordPress
- [Next.js](https://nextjs.org/) - Framework de React para producción
- [WordPress](https://wordpress.org/) - CMS headless
- [Atlas Content Modeler (ACM)](https://www.wpgraphql.com/2021/07/08/introducing-atlas-content-modeler) - Plugin para modelado de contenido
- [WPGraphQL](https://www.wpgraphql.com/) - API GraphQL para WordPress

## Requisitos Previos

- Node.js 16.x o superior
- WordPress instalado y configurado
- Plugin Atlas Content Modeler instalado y activado
- Plugin WPGraphQL instalado y activado

## Configuración del Proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/capellopablo/atlas-wp.git
cd atlas-wp
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
   - Copia el archivo `.env.example` a `.env.local`
   - Actualiza las variables con tus credenciales de WordPress

4. Importar el blueprint de ACM:
```bash
wp acm blueprint import acm-blueprint.zip
```

## Desarrollo Local

1. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

2. Visitar `http://localhost:3000`

El proyecto utiliza Next.js con hot-reloading, por lo que los cambios se reflejarán automáticamente en el navegador.

## Estructura del Proyecto

- `/app` - Componentes y lógica de la aplicación
- `/components` - Componentes React reutilizables
- `/pages` - Rutas y páginas de Next.js
- `/styles` - Archivos de estilos
- `/wp-blocks` - Bloques personalizados de WordPress
- `/wp-templates` - Plantillas de WordPress

## Comandos Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Desarrollo y Contribución

Para más detalles sobre el desarrollo y contribución al proyecto, consulta [DEVELOPMENT.md](DEVELOPMENT.md).

## Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles. 