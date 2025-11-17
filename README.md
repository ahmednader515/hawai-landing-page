# Hawai Contracting Company - Landing Page

A modern, responsive Next.js landing page for a contracting company with all essential sections.

## Features

- **Hero Section** with background video support
- **About Us** section
- **Mission & Vision** sections
- **Scope of Services** with detailed service offerings
- **Registration and Licenses** display
- **Organization Chart** visualization
- **Safety Policies & Quality Assurance** information
- **Clients & Partners** showcase
- **Accreditations** display
- **List of Projects** portfolio
- **Clients** section
- **Contact Form** for inquiries

## Design

- Clean, modern design inspired by professional contracting company websites
- Black theme color for accents and text
- Light mode design with white background
- Fully responsive for all device sizes
- Smooth scrolling and animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add a hero video (optional):
   - Place a video file named `hero-video.mp4` in the `public` folder
   - The video should be in MP4 format for best browser compatibility
   - If no video is provided, a gradient background will be shown as fallback

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
hawai-landing-page/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer component
│   └── sections/           # All page sections
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── MissionSection.tsx
│       ├── VisionSection.tsx
│       ├── ServicesSection.tsx
│       ├── LicensesSection.tsx
│       ├── OrganizationSection.tsx
│       ├── SafetySection.tsx
│       ├── ClientsPartnersSection.tsx
│       ├── AccreditationsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ClientsSection.tsx
│       └── ContactSection.tsx
├── public/                 # Static assets (add hero-video.mp4 here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Content
All content can be customized in the respective section components in `components/sections/`.

### Hero Video
1. Add your video file to the `public` folder
2. Name it `hero-video.mp4`
3. The video will automatically be used as the background

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations (available but not heavily used)

## License

This project is created for Hawai Contracting Company.

