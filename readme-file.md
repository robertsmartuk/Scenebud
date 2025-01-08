# Scenebud - Live Music Platform

## Development Environment Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (comes with Node.js)

### Tech Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

### Project Structure
```
scenebud/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── Header.tsx       # Shared header component
│   │   ├── Footer.tsx       # Shared footer component
│   │   └── ui/              # UI components
│   └── lib/
│       └── utils.ts         # Utility functions
├── public/
│   └── Logo Horiz.png       # Logo and other static assets
├── package.json
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── postcss.config.js       # PostCSS configuration
```

### Installed Dependencies
```json
{
  "dependencies": {
    "lucide-react": "latest",
    "@radix-ui/react-icons": "latest",
    "next-themes": "latest",
    "@radix-ui/react-dialog": "latest",
    "@radix-ui/react-label": "latest",
    "@radix-ui/react-slot": "latest",
    "@radix-ui/react-tabs": "latest",
    "class-variance-authority": "latest",
    "clsx": "latest",
    "tailwind-merge": "latest",
    "tailwindcss-animate": "latest"
  }
}
```

### Getting Started

1. Clone the repository
```bash
git clone [repository-url]
cd scenebud
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Available Scripts
- `npm run dev`: Starts the development server
- `npm run build`: Creates a production build
- `npm run start`: Runs the production build
- `npm run lint`: Runs ESLint to check code quality

### Styling
The project uses Tailwind CSS with a custom configuration that includes:
- Custom purple color scheme
- Responsive container settings
- Animation utilities

### Components
- **Header**: Main navigation component with logo, search, and menu links
- **Footer**: Site-wide footer with logo and social links
- **Layout**: Root layout component that wraps all pages

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)