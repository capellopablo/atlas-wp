# Atlas WordPress Project

## Overview
This project is a headless WordPress site built with Faust.js, a framework for WordPress development in Next.js. It serves as a scaffold for new WordPress projects and includes Atlas Content Modeler integration.

## Technologies
- **[Faust.js](https://faustjs.org/)** (v3.1.0): Framework for building headless WordPress sites with Next.js
- **[Next.js](https://nextjs.org/)** (v14.2.14): React framework for server-side rendering and static site generation
- **[React](https://reactjs.org/)** (v18.3.1): JavaScript library for building user interfaces
- **[Apollo Client](https://www.apollographql.com/docs/react/)** (v3.10.4): GraphQL client for React applications
- **[WordPress](https://wordpress.org/)**: Headless CMS backend
- **[Atlas Content Modeler](https://www.atlascontentmodeler.com/)**: Custom post type builder for WordPress
- **[SASS](https://sass-lang.com/)** (v1.77.3): CSS preprocessor
- **[Formik](https://formik.org/)** (v2.4.6): Form handling library for React
- **Aprende Design System** (v1.1.3): Custom design system components

## Getting Started with Faust.js

### Prerequisites
- Node.js (>=18)
- npm (>=8)
- A WordPress instance with WPGraphQL plugin installed

### Installation
1. Clone this repository
```bash
git clone <repository-url>
cd atlas-wp
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_WORDPRESS_URL=<your-wordpress-site-url>
FAUST_SECRET_KEY=<your-faust-secret-key>
```

4. Start the development server
```bash
npm run dev
```

The application will be available at http://localhost:3000

### Building for Production
```bash
npm run build
npm run start
```

## Content Modeling
This project uses Atlas Content Modeler for custom post types. For more information on importing and exporting ACM blueprints, see the [DEVELOPMENT.md](./DEVELOPMENT.md) file.

## Project Structure
- `/wp-templates/`: WordPress template files
- `/wp-blocks/`: WordPress block components
- `/components/`: React components
- `/pages/`: Next.js pages
- `/styles/`: SASS stylesheets
- `/assets/`: Static assets like images

## Additional Documentation
- [Faust.js Documentation](https://faustjs.org/docs/introduction)
- [Atlas Content Modeler Documentation](https://www.atlascontentmodeler.com/wpengine/atlas-content-modeler/) 