# MarketBoost Landing Page

A professional, high-converting digital marketing landing page built with React, Tailwind CSS, and Framer Motion.

## Features

- **Standard Sections**: Navbar, Hero, Services, Features, Statistics, and Contact.
- **Dynamic UI**: Fixed glassmorphism Navbar that reacts to scroll.
- **Animations**: Smooth entrance animations and scroll-triggered counters.
- **Form Validation**: Comprehensive client-side validation with custom error messages.
- **Mock Data**: Quick-fill buttons to test the form with sample data.
- **Responsive**: Fully optimized for mobile, tablet, and desktop views.
- **Thank You Redirect**: Seamless flow from form submission to a dedicated success page.

## Tech Stack

- **React 18**
- **Tailwind CSS v4** (Modern styling)
- **Framer Motion** (Smooth transitions and animations)
- **Lucide React** (Consistent iconography)
- **React Router** (Multi-page routing)

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### Project Structure
- `src/components`: Reusable UI sections.
- `src/pages`: Main page components (Home, Thank You).
- `src/index.css`: Global styles and Tailwind configuration.

## Validation Rules
- **Full Name**: Required, min 3 characters.
- **Email**: Required, valid email format.
- **Phone**: Required, numbers only, min 11 digits.
- **Service/Budget**: Required selection.
- **Project Details**: Required, min 20 characters.
