# Atlas WordPress with Faust.js

This repository contains a headless WordPress project built with Faust.js, a framework for building front-end applications with WordPress as a headless CMS.

## Technologies Used

### Front-end
- **Faust.js**: Headless WordPress framework
- **Next.js**: React framework for server-rendered applications
- **React**: JavaScript library for building user interfaces
- **Apollo Client**: GraphQL client for state management
- **Sass**: CSS preprocessor for styling

### Dependencies
- `@faustwp/core`: Core Faust.js functionality
- `@faustwp/cli`: Command-line interface for Faust.js
- `@faustwp/blocks`: WordPress block editor support
- `@aprende-com/design-system`: Internal design system
- `formik`: Form handling library
- `graphql`: GraphQL query language support
- `classnames`: Utility for conditionally joining classNames

## Getting Started with Faust.js

### Prerequisites
- Node.js 18 or higher
- npm 8 or higher
- A WordPress installation with the following plugins:
  - WPGraphQL
  - Faust (WordPress plugin)
  - Atlas Content Modeler (if using ACM)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/your-org/atlas-wp.git
cd atlas-wp
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_WORDPRESS_URL=your-wordpress-site.com
FAUST_SECRET_KEY=your-faust-secret-key
```

4. Start the development server:
```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm run start
```

### Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run generate`: Generate possible types
- `npm run stylesheet`: Generate global stylesheet
- `npm run start`: Start production server
- `npm run install:with-env`: Install dependencies with environment variables

## Project Structure

- `/app`: Next.js application entry point
- `/assets`: Static assets like images
- `/components`: Reusable React components
- `/pages`: Next.js pages
- `/styles`: Global and component styles
- `/wp-blocks`: Custom WordPress block editor components
- `/wp-templates`: WordPress template components

## Development Workflow

See [DEVELOPMENT.md](DEVELOPMENT.md) for more details about the development workflow, including how to update the ACM Blueprint export. 