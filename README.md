# Henry Xiao Portfolio

A modern, responsive portfolio website built with React, Vite, and IBM Carbon Design System.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Carbon Design System**: Built with IBM's Carbon Design System for a professional, enterprise-grade UI
- **Accessibility**: WCAG 2.2 AA compliant with proper semantic HTML and ARIA labels
- **Modern Stack**: React 18, Vite 5, and SASS for optimal performance
- **Smooth Animations**: Subtle transitions and hover effects for enhanced user experience

## 📋 Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Professional background and focus areas
3. **Expertise** - Three main areas of expertise with clickable tiles
4. **Projects** - Expandable project cards with details
5. **Writing** - Article cards for technical writing
6. **Skills** - Categorized skill tags
7. **Contact** - Social media links and contact information

## 🛠️ Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.0
- **Design System**: @carbon/react 1.40.0
- **Styling**: SCSS with Carbon tokens
- **Icons**: @carbon/icons-react 11.30.0

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Colors

Edit `src/styles/_variables.scss` to customize the color palette:

```scss
$portfolio-primary: #8a3ffc;      // Purple
$portfolio-accent-cyan: #1192e8;   // Cyan
$portfolio-accent-magenta: #ee5396; // Magenta
```

### Content

Update content in the respective component files:
- `src/components/Hero/Hero.jsx` - Hero section content
- `src/components/About/About.jsx` - About section content
- `src/components/Expertise/Expertise.jsx` - Expertise areas
- `src/components/Projects/Projects.jsx` - Project details
- `src/components/Writing/Writing.jsx` - Articles
- `src/components/Skills/Skills.jsx` - Skills list
- `src/components/Contact/Contact.jsx` - Contact information

### Images

Add images to `public/images/` directory:
- `profile.webp` - Professional photo for About section
- `projects/` - Project screenshots

## 🌐 Deployment

### GitHub Pages

1. Update `vite.config.js` with your repository name:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

2. Build and deploy:
```bash
npm run build
# Deploy the dist folder to GitHub Pages
```

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Import your repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Development

### Project Structure

```
portfolio/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Expertise/
│   │   ├── Projects/
│   │   ├── Writing/
│   │   ├── Skills/
│   │   └── Contact/
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _typography.scss
│   │   └── styles.scss
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Henry Xiao**
- Role: Agent Builder | Data and AI Customer Success Engineer @IBM FSM
- GitHub: [@henry-xiao](https://github.com/henry-xiao)
- LinkedIn: [henry-xiao](https://linkedin.com/in/henry-xiao)

## 🙏 Acknowledgments

- [IBM Carbon Design System](https://carbondesignsystem.com/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
