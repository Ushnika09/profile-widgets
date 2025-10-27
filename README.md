# Profile & Gallery Assignment

A responsive React application featuring an interactive profile widget with tabbed navigation and a dynamic image gallery. Built with React, Tailwind CSS, and Lucide React icons.

## Features

✨ **Interactive Profile Tabs**
- Three clickable tabs: "About Me", "Experiences", "Recommended"
- Smooth sliding indicator animation
- Hover effects with gradient transitions
- Tab content display

✨ **Dynamic Image Gallery**
- Add images dynamically with the "+ ADD IMAGE" button
- Navigate through images with previous/next arrows
- Hover effects with scale, rotate, and tilt animations
- Locally generated placeholder images (no external dependencies)
- Responsive carousel layout

✨ **Responsive Design**
- Fully responsive for laptop screens (≥768px)
- Mobile-optimized layout (<768px)
- Centered widgets on mobile, right-aligned on desktop
- Smooth transitions between breakpoints

## Tech Stack

- React - UI library with hooks
- Tailwind CSS - Utility-first CSS framework
- Lucide React - Icon library (v0.263.1)
- JavaScript ES6+ - Modern JavaScript

## Project Structure

```
src/
├── App.jsx              
├── components/
│   ├── ProfileTabs.jsx  
│   └── GalleryWidget.jsx 
├── App.css              
└── index.js             
```

## Installation

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. Open `http://localhost:3000` in your browser

## Usage

### Profile Tabs
- Click on any tab ("About Me", "Experiences", "Recommended") to switch content
- Active tab is highlighted with a sliding indicator
- Hover effects provide visual feedback

### Gallery Widget
- Click the "+ ADD IMAGE" button to add new images
- Use arrow buttons to navigate through the gallery
- Hover over images to see scale, rotate, and tilt effects
- Images are randomly generated locally with no network requests

## Responsive Behavior

### Desktop (≥768px)
- Left empty space: 836px
- Right widgets container: 720px
- Full layout with proper spacing and alignment

### Mobile (<768px)
- Single column layout
- Widgets take full width with padding
- Left space hidden
- Centered and properly spaced

## Component Details

### ProfileTabs Component
- State management for active tab tracking
- Dynamic tab indicator positioning
- Smooth CSS transitions and animations
- Hover progress bar effects on inactive tabs

### GalleryWidget Component
- Image carousel with navigation controls
- Hover detection with mouse tracking
- Canvas-based placeholder image generation
- Disabled states for navigation at boundaries

## Styling

All styling is done with Tailwind CSS utility classes with custom colors, shadows, gradients, rounded corners, and responsive spacing matching the design specifications.

## Performance

- Lazy loading for images
- Optimized animations with GPU acceleration
- Minimal re-renders with React hooks
- Local image generation without API calls

## Deployment

### Deploy to Netlify
1. Push code to GitHub
2. Go to Netlify and create new site from Git
3. Select your GitHub repository
4. Netlify auto-detects React and deploys automatically

### Deploy to Vercel
1. Push code to GitHub
2. Go to Vercel and create new project
3. Import your GitHub repository
4. Deploy with one click

## Design Specifications

- Gradient background: `linear-gradient(180deg, #373E44 -100%, #191B1F 100%)`
- Primary colors: Dark grays and blacks with accent colors
- Typography: Poppins, Plus Jakarta Sans
- Spacing: Consistent 16px, 29px, 96px increments
- Border radius: 18.89px, 27px, 104px

## Key Features

The profile tabs feature smooth animations and transitions when switching between different sections. Users can click on any tab to view different content with a sliding indicator showing the active state.

The gallery widget allows users to dynamically add new images, navigate through them using arrow buttons, and experience interactive hover effects that scale and rotate the images for a premium feel.

Both components are fully responsive and adjust their layout based on screen size. On mobile devices, the widgets stack vertically and take up the full width, while on desktop they maintain their precise positioning on the right side of the layout.

## Future Enhancements

- Add real image upload functionality
- Implement different content for each tab
- Add image deletion feature
- Image filtering and sorting options
- Enhanced animations on tab transitions

## License

This project is provided as-is for educational purposes.
