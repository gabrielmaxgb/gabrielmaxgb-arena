# Gabriel Max Gomes - Portfolio

## 📖 About the Project

This is the personal portfolio of Gabriel Max Gomes de Bessa (aka gabrielmaxgb), a front-end developer passionate about creating intuitive and beautiful digital experiences. The project features a modern interface with interactive 3D animations using Three.js, showcasing his professional journey, projects, and technical articles.

The portfolio reflects the philosophy of transforming complexity into simplicity through intuitive interfaces, combining modern design with robust functionality. It includes sections for personal introduction, professional journey, current projects, and a blog with technical articles.

## 🚀 Technologies Used

### Core Framework

- **[Nuxt 3](https://nuxt.com/)** - Vue.js framework for universal applications
- **[Vue 3](https://vuejs.org/)** - Progressive framework for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript superset with static typing

### UI & Styling

- **[Nuxt UI](https://ui.nuxt.com/)** - Vue 3 component library
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Merge](https://github.com/dcastil/tailwind-merge)** - Utility for merging Tailwind classes

### 3D & Animations

- **[Three.js](https://threejs.org/)** - 3D library for WebGL
- **[@types/three](https://www.npmjs.com/package/@types/three)** - TypeScript types for Three.js

### Development Tools

- **[ESLint](https://eslint.org/)** - Linter for JavaScript/TypeScript
- **[Nuxt Content](https://content.nuxt.com/)** - Content management system
- **[Nuxt Icon](https://github.com/nuxt-modules/icon)** - Icon system
- **[Nuxt Image](https://image.nuxt.com/)** - Image optimization
- **[Nuxt Fonts](https://github.com/nuxt-modules/fonts)** - Font management

### Deployment

- **[GitHub Pages](https://pages.github.com/)** - Static hosting
- **[gh-pages](https://www.npmjs.com/package/gh-pages)** - Automated deploy

## 📁 Project Structure

```
gabrielmaxgb-arena/
├── assets/
│   └── css/
│       └── main.css              # Global styles and Tailwind configuration
├── components/
│   ├── ArticleItem.vue           # Component to display blog articles
│   ├── MainContainer.vue         # Main container with responsive layout
│   ├── MainSection.vue           # Reusable content section
│   ├── ThreeScene.vue            # Interactive 3D scene with Three.js
│   └── TopNavigationBar.vue      # Top navigation bar
├── layouts/
│   └── default/
│       └── index.vue             # Default layout with ThreeScene
├── pages/
│   ├── [...all].vue              # Catch-all page for dynamic routes
│   ├── blog.vue                  # Blog page
│   └── index.vue                 # Home / portfolio page
├── public/
│   ├── favicon.ico               # Site icon
│   ├── gmgb.svg                  # Personal logo
│   ├── p4n-logo.svg              # Pros4Noobs logo
│   └── robots.txt                # Crawlers configuration
├── server/
│   └── tsconfig.json             # Server TypeScript configuration
├── nuxt.config.ts                # Main Nuxt configuration
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── three.d.ts                    # Type declarations for Three.js
└── eslint.config.mjs             # ESLint configuration
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation Steps

1. Clone the repository

   ```bash
   git clone https://github.com/gabrielmaxgb/gabrielmaxgb-arena.git
   cd gabrielmaxgb-arena
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the project
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run preview      # Preview production build

# Build and Deploy
npm run build        # Build for production
npm run generate     # Generate static site
npm run deploy       # Deploy to GitHub Pages
```

## 🎨 Project Practices & Patterns

### Component Structure

- Composables: Use of <script setup> with TypeScript
- Props: Strong typing with TypeScript interfaces
- Events: Typed event emissions
- Slots: Named slots for flexibility

### Styling

- Tailwind CSS: Utility classes for rapid styling
- Tailwind Merge: Intelligent class merging
- Design System: Consistent colors and typography
- Responsiveness: Mobile-first with defined breakpoints

### Performance

- SSR Disabled: SPA application for better performance
- Lazy Loading: On-demand component loading
- Image Optimization: Nuxt Image for automatic optimization
- Optimized Fonts: Efficient loading via Nuxt Fonts

### 3D and Animations

- Three.js: Interactive 3D scene used as background
- Scroll-based Animation: Animations triggered by scrolling
- Performance: Optimized with requestAnimationFrame
- Responsive: 3D scene adapts to different screen sizes

### TypeScript

- Strict Typing: Consistent use of types
- Interfaces: Clear data structure definitions
- Generics: Proper use of generics when needed

## 🚀 Deployment

The project is configured for automated deployment to GitHub Pages:

1. Build the project

   ```bash
   npm run generate
   ```

2. Automatic deploy
   ```bash
   npm run deploy
   ```

The site will be available at: `https://gabrielmaxgb.github.io/gabrielmaxgb-arena/`

## 📝 Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Guidelines

- Use semantic commits
- Describe changes clearly
- Include tests when appropriate

## 📄 License

This project is private and personal. All rights reserved.

## 👨‍💻 Author

**Gabriel Max Gomes de Bessa**

- GitHub: [@gabrielmaxgb](https://github.com/gabrielmaxgb)
- LinkedIn: [gabrielmaxgb](https://www.linkedin.com/in/gabrielmaxgb/)
- Instagram: [@gabrielmaxgb](https://www.instagram.com/gabrielmaxgb/)
- Email: gmaxgomes@gmail.com

## 🙏 Acknowledgements

- Nuxt.js community
- Three.js team
- Tailwind CSS contributors
- Everyone who supported this project
```
