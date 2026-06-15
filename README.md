# 🚀 EliteCommerce

<div align="center">
  <p align="center">
    <strong>Build the Next Iconic Online Store</strong>
    <br />
    Professional, SEO-optimized landing page mockups inspired by world-class brands.
  </p>
  
  <p align="center">
    <a href="https://elite-commerce.vercel.app"><strong>View Live Demo »</strong></a>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind 4" />
    <img src="https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/ESLint-Enabled-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  </p>
</div>

---

## ✨ Features

- **🌙 Premium Dark Mode** - Seamless theme switching with system preference detection.
- **🔍 Interactive Preview Modals** - Beautifully animated mockup details powered by Framer Motion.
- **📊 Dynamic Mockup System** - Decoupled data architecture for easy scaling and management.
- **📧 Functional Contact Form** - Ready-to-use lead generation with Formspree integration.
- **🚀 High-Impact SEO** - Optimized Meta & Open Graph tags for social media dominance.
- **⚡ Lightning Fast** - Built with Vite and React 19 for instantaneous load times.
- **🛡️ Type-Safe** - Full TypeScript coverage with strict mode enabled.
- **📐 State Management** - Zustand for lightweight, scalable state management.
- **🎨 Component Library** - Lucide React icons + Tailwind CSS for beautiful UI.
- **✅ Code Quality** - ESLint + Prettier for consistent, clean code.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Framework** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Build Tool** | [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **State** | [Zustand](https://github.com/pmndrs/zustand) |
| **HTTP Client** | [Axios](https://axios-http.com/) |
| **Code Quality** | [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) |
| **Testing** | [Vitest](https://vitest.dev/) |
| **Analytics** | [Vercel Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/speed-insights) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sahilnadafexcelligents-glitch/Elite-Commerce.git
   cd Elite-Commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

---

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start dev server with HMR
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types

# Testing & Utilities
npm run test         # Run tests with Vitest
npm run clean        # Remove dist directory
```

---

## 📂 Project Structure

```text
Elite-Commerce/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Modal.tsx
│   │   └── ...
│   ├── data/                 # Data types and mock data
│   │   ├── types.ts
│   │   └── mockups.ts
│   ├── hooks/                # Custom React hooks
│   ├── store/                # Zustand state management
│   ├── utils/                # Utility functions
│   ├── App.tsx               # Root component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── .eslintrc.json           # ESLint configuration
├── .prettierrc.json         # Prettier configuration
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

---

## 🔧 Configuration Files

### ESLint & Prettier
The project uses ESLint for code linting and Prettier for automatic code formatting.

```bash
# Format all files
npm run format

# Fix linting issues
npm run lint:fix
```

### Environment Variables
See `.env.example` for required environment variables:
- `VITE_API_URL` - Backend API endpoint
- `VITE_GOOGLE_AI_KEY` - Google Generative AI API key

---

## 🚢 Deployment

### Vercel (Recommended)
This project is optimized for Vercel deployment:

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on push
4. Analytics and Speed Insights enabled by default

### Manual Deployment
```bash
# Build
npm run build

# The `dist` folder is ready to deploy
```

---

## 📊 Performance Optimizations

- **Code Splitting** - Vite automatically splits code for optimal loading
- **Image Optimization** - Consider using Next.js Image or similar
- **CSS Purging** - Tailwind removes unused styles automatically
- **Tree Shaking** - ES modules ensure dead code elimination
- **Analytics** - Vercel Analytics tracks Core Web Vitals

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the MIT License.

---

## 📞 Support

For issues, questions, or suggestions, please open an [issue](https://github.com/sahilnadafexcelligents-glitch/Elite-Commerce/issues).

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/sahilnadafexcelligents-glitch">Sahil Nada</a></p>
  <p>© 2026 EliteCommerce. All rights reserved.</p>
</div>
