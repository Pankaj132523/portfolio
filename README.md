# Modern Portfolio Website

A beautiful, responsive portfolio website built with React and TypeScript. Features smooth animations, modern design, and easy customization.

## Features

- **Responsive Design** - Works perfectly on all devices
- **Smooth Animations** - Fade-in effects and smooth scrolling
- **Modern UI** - Clean, professional design with hover effects
- **TypeScript Support** - Full type safety and better development experience
- **Customizable** - Easy to modify content, colors, and layout
- **Performance Optimized** - Fast loading and smooth interactions
- **Accessible** - Built with accessibility best practices

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

## Customization

### Basic Information

Edit `src/App.tsx` to customize your basic information:

```tsx
const portfolioData = {
  name: "Your Name",
  title: "Your Professional Title",
  subtitle: "Your tagline or description",
  // ... more options
};
```

### Advanced Customization

For complete customization, use the sample data in `src/utils/portfolioData.ts`:

```tsx
import { samplePortfolioData } from './utils/portfolioData';

// In App.tsx
<Portfolio 
  data={samplePortfolioData}
  onContactSubmit={handleContactSubmit}
/>
```

### Sections

#### Hero Section
- **Name**: Your full name
- **Title**: Your professional title/role
- **Subtitle**: A brief description or tagline

#### About Section
- **Description**: Array of paragraphs about yourself
- **Skills**: Array of skills with icons and names

#### Projects Section
- **Projects**: Array of project objects with:
  - Title and description
  - Technologies used
  - Live demo and GitHub URLs
  - Project images

#### Contact Section
- **Form handling**: Customize the `onContactSubmit` function
- **Title and description**: Modify contact section text

#### Footer
- **Social Links**: Array of social media links with icons
- **Copyright**: Automatically includes current year

## Component Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Fixed navigation with scroll effects
│   ├── Hero.tsx         # Hero section with CTA buttons
│   ├── About.tsx        # About section with skills
│   ├── Projects.tsx     # Projects showcase
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with social links
├── hooks/
│   ├── useScrollEffect.tsx          # Navbar scroll effect
│   └── useIntersectionObserver.tsx  # Fade-in animations
├── pages/
│   └── Portfolio.tsx    # Main portfolio page
├── styles/
│   └── Portfolio.css    # All styles
└── utils/
    └── portfolioData.ts # Sample data and types
```

## Styling

All styles are in `src/styles/Portfolio.css`. The CSS is organized by components and includes:

- **Variables**: Easy to modify colors and spacing
- **Responsive Design**: Mobile-first approach
- **Animations**: Smooth transitions and fade-in effects
- **Modern CSS**: Flexbox, Grid, and modern properties

### Color Customization

Main colors used:
- **Primary**: `#2563eb` (Blue)
- **Secondary**: `#64748b` (Gray)
- **Background**: `#fafafa` (Light gray)
- **Text**: `#333` (Dark gray)

## Form Handling

The contact form includes:
- **Client-side validation**
- **Custom submit handler**
- **Form reset after submission**
- **Responsive design**

Customize the form submission in `App.tsx`:

```tsx
const handleContactSubmit = (formData: any) => {
  // Send to your API
  // Email service integration
  // Database storage
  console.log('Contact form submitted:', formData);
};
```

## Performance Features

- **Intersection Observer**: Efficient scroll-based animations
- **Smooth Scrolling**: Native CSS smooth scrolling
- **Optimized Images**: Placeholder gradients for project images
- **Minimal Dependencies**: Uses React hooks for functionality

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **CSS Features**: Backdrop-filter, CSS Grid, Flexbox

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Deploy to Vercel

1. Connect your GitHub repository
2. Vercel will automatically detect Vite
3. Deploy with default settings

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

The project follows a component-based architecture:
- **Reusable Components**: Each section is a separate component
- **Custom Hooks**: Shared functionality in hooks
- **TypeScript**: Type safety throughout
- **CSS Organization**: Structured CSS with comments

## Customization Examples

### Adding a New Skill

```tsx
const skills = [
  { icon: '🚀', name: 'Next.js' },
  // ... existing skills
];
```

### Adding a New Project

```tsx
const projects = [
  {
    title: 'My New Project',
    description: 'Description of the project...',
    technologies: ['React', 'Node.js'],
    liveUrl: 'https://...',
    githubUrl: 'https://github.com/...'
  },
  // ... existing projects
];
```

### Modifying Colors

Edit `src/styles/Portfolio.css`:

```css
/* Change primary color */
.btn-primary {
  background: #your-color;
}

/* Change accent color */
.section-title::after {
  background: #your-accent-color;
}
```

## License

MIT License - feel free to use this for your own portfolio!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using React, TypeScript, and modern web technologies.
