# Eslam A. Hugair - Portfolio

A modern, professional, and mobile-first personal portfolio website showcasing my experience as a Full-Stack Web Engineer.

## 🚀 Built With

- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[React 19](https://react.dev/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautifully designed components built with Radix UI and Tailwind CSS
- **[Lucide React](https://lucide.dev/)** - Beautiful & consistent icon toolkit

## ✨ Features

- **Modern Design**: Clean, accessible, and minimal design focused on clarity and professionalism
- **Mobile-First**: Responsive design that works perfectly on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Accessible**: Built with accessibility in mind using shadcn/ui components
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section** - Name, title, and contact actions
2. **About** - Professional summary and experience overview
3. **Work Experience** - Detailed work history with achievements
4. **Selected Projects** - Showcase of meaningful projects
5. **Skills** - Organized by technology categories
6. **Footer** - Professional links and contact information

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Eslam3bed/my-portfolio.git
cd my-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

This portfolio is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. Triggers on pushes to `master` or `main` branch
2. Builds the project using Vite
3. Deploys to GitHub Pages

### Manual Deployment

To deploy manually:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # shadcn/ui components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors and Theming

The project uses CSS variables for theming. You can customize colors in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other variables */
}
```

### Content

Update the content in `src/App.tsx`:

- Personal information in the hero section
- Work experience data
- Projects information
- Skills categories

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Eslam3bed/my-portfolio/issues).

## 📞 Contact

- **Email**: [e.eslam3bed@gmail.com](mailto:e.eslam3bed@gmail.com)
- **LinkedIn**: [linkedin.com/in/eslam3bed](https://www.linkedin.com/in/eslam3bed/)
- **GitHub**: [github.com/Eslam3bed](https://github.com/Eslam3bed)

---

Built with ❤️ by [Eslam A. Hugair](https://github.com/Eslam3bed)
