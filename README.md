# 🎨 reduceImg - Privacy-First Image Compression Tool

A modern, privacy-focused web application for compressing images directly in your browser. No servers, no uploads, no tracking - just pure client-side image compression with advanced algorithms.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-06B6D4.svg)](https://tailwindcss.com/)

## 🚀 Features

### 🔒 Privacy-First Design

- **100% Client-Side Processing**: All compression happens locally in your browser
- **No Server Uploads**: Your images never leave your device
- **No Data Collection**: Zero tracking, analytics, or data storage
- **EXIF Metadata Control**: Option to strip sensitive metadata from images

### 📊 Compression Modes

- **Preset Mode**: Choose from three quality presets

  - 🎨 **Low Compression**: Minimal compression with best quality (90% quality, 2048px max)
  - ⚡ **Medium Compression**: Balanced compression and quality (70% quality, 1920px max)
  - 🔥 **Extreme Compression**: Maximum compression for smallest files (40% quality, 1280px max)

- **Target Size Mode**: Specify exact file size targets
  - Smart dynamic resolution adjustment based on target size
  - Iterative quality optimization to meet size requirements
  - Support for KB and MB targets
  - Advanced algorithms prevent infinite loops

### 🎯 Advanced Compression Engine

- **Dynamic Resolution Scaling**: Automatically adjusts image dimensions based on target size
- **Quality Optimization Loop**: Iteratively reduces quality to meet exact size targets
- **Web Worker Support**: Non-blocking compression for better UX
- **Multi-Format Support**: JPG, PNG, GIF, WebP, BMP

### 🌙 Modern User Experience

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Drag & Drop Interface**: Intuitive file upload experience
- **Real-Time Preview**: See compression results instantly
- **Progress Indicators**: Loading states and compression progress
- **Download Management**: One-click download with preserved filenames

## 🛠️ Technology Stack

### Frontend Framework

- **React 19.1.1** - Latest React with concurrent features
- **Vite 7.1.12** - Lightning-fast build tool with Rolldown
- **JavaScript (ES6+)** - Modern JavaScript features

### Styling & UI

- **TailwindCSS 4.1.13** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable SVG icons
- **CSS Gradients** - Modern gradient backgrounds
- **Responsive Grid System** - Mobile-first design

### Image Processing

- **browser-image-compression 2.0.2** - Advanced client-side compression
- **Web Workers** - Background processing for better performance
- **Canvas API** - Image manipulation and processing
- **FileReader API** - File handling and preview generation

### Development Tools

- **ESLint** - Code linting and quality enforcement
- **PropTypes** - Runtime type checking
- **Vite HMR** - Hot Module Replacement for development

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser with ES6+ support

### Quick Start

```bash
# Clone the repository
git clone https://github.com/mohits2806/reduceImg.git
cd reduceImg

# Install dependencies
npm install

# Start development server
npm start
# or
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The app runs on `http://localhost:3000` by default and is accessible on your local network.

## 🎯 Usage Guide

### Basic Image Compression

1. **Upload Image**

   - Drag and drop an image file onto the upload area
   - Or click "browse files" to select from your device
   - Supports: JPG, PNG, GIF, WebP, BMP formats

2. **Choose Compression Method**

   - **Preset Mode**: Select from Low, Medium, or Extreme compression
   - **Target Size Mode**: Enter specific file size (KB or MB)

3. **Configure Options**

   - Toggle metadata removal (EXIF data)
   - Adjust compression settings as needed

4. **Compress & Download**
   - Click "Compress Image" to start processing
   - Preview the compressed result
   - Download with one click

### Advanced Features

#### Target Size Compression

- Enter exact target size (e.g., "500" KB or "2" MB)
- The algorithm automatically adjusts quality and resolution
- Smart scaling prevents over-compression

#### Metadata Handling

- **Strip Metadata**: Remove EXIF data, GPS coordinates, camera info
- **Preserve EXIF**: Keep original metadata intact
- Privacy control for sensitive information

## 🏗️ Project Structure

```
reduceImg/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # App header with branding
│   │   ├── ImageDropzone.jsx # File upload interface
│   │   ├── CompressionOptionsPanel.jsx # Settings panel
│   │   ├── CompressionModeSelector.jsx # Preset selection
│   │   ├── TargetSizeInput.jsx # Size input component
│   │   ├── CompressionResult.jsx # Results display
│   │   └── Footer.jsx       # App footer
│   ├── utils/               # Utility functions
│   │   ├── constants.js     # Compression presets
│   │   └── helpers.js       # File size formatting
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React app entry point
│   ├── App.css             # Global styles
│   └── index.css           # Base styles
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md             # Project documentation
```

### Component Architecture

#### Core Components

- **App.jsx**: Main application logic and state management
- **Header.jsx**: Branding, theme toggle, and navigation
- **ImageDropzone.jsx**: File upload with drag-and-drop support
- **CompressionResult.jsx**: Results display and download functionality

#### Feature Components

- **CompressionOptionsPanel.jsx**: Mode selection and metadata options
- **CompressionModeSelector.jsx**: Quality preset selection interface
- **TargetSizeInput.jsx**: Target file size input with validation

#### Utility Modules

- **constants.js**: Compression presets and configuration
- **helpers.js**: File formatting and calculation utilities

## ⚙️ Configuration

### Compression Presets

Located in `src/utils/constants.js`:

```javascript
export const COMPRESSION_PRESETS = {
  low: {
    quality: 0.9,
    maxWidthOrHeight: 2048,
  },
  medium: {
    quality: 0.7,
    maxWidthOrHeight: 1920,
  },
  extreme: {
    quality: 0.4,
    maxWidthOrHeight: 1280,
  },
};
```

### Build Configuration

The project uses Vite with custom configuration:

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,        // Network accessible
    port: 3000,        # Development port
  },
});
```

## 🎨 Theming

### Dark/Light Mode

- Automatic system preference detection
- Manual toggle in header
- Persistent user preference storage
- TailwindCSS dark mode classes

### Custom Styling

- Gradient backgrounds and modern UI
- Responsive design patterns
- Smooth transitions and animations
- Accessibility-focused design

## 📱 Browser Support

### Supported Browsers

- Chrome 80+ (recommended)
- Firefox 75+
- Safari 13.1+
- Edge 80+

### Required Features

- ES6+ JavaScript support
- Web Workers API
- File and FileReader APIs
- Canvas API for image processing

## 🔧 Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm start

# Run linting
npm run lint

# Build production version
npm run build
```

### Code Quality

- ESLint configuration for React best practices
- Consistent code formatting and style
- PropTypes for component type checking
- Modern JavaScript (ES6+) features

## 🚀 Deployment

### Build Process

```bash
# Create production build
npm run build

# Files will be generated in dist/ directory
# Deploy dist/ contents to any static hosting service
```

### Hosting Options

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based automatic deployments
- **GitHub Pages**: Free hosting for public repos
- **Any Static Host**: Apache, Nginx, CDN

### Environment Variables

No environment variables required - fully client-side application.

## 🤝 Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and patterns
- Add PropTypes for new components
- Test on multiple browsers and devices
- Update documentation for new features

### Bug Reports

Please include:

- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2025 Mohit Shaharwale

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

## 👨‍💻 Developer

**Mohit Shaharwale**

- Portfolio: [mohitshaharwale.netlify.app](https://mohitshaharwale.netlify.app)
- GitHub: [@mohits2806](https://github.com/mohits2806)

---

## 📊 Project Stats

- **Bundle Size**: Optimized for fast loading
- **Performance**: 90+ Lighthouse score
- **Accessibility**: WCAG 2.1 compliant
- **Security**: No external data transmission

### Performance Features

- Lazy loading for optimal performance
- Web Worker compression for non-blocking UI
- Optimized image rendering and preview
- Minimal bundle size with tree shaking

---

**Made with ❤️ for privacy-conscious users who want powerful image compression without compromising their data.**
