# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
- `npm start` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm test` - Run Jest tests
- `npm run firebase:serve` - Build and serve locally with Firebase

### Deployment
- `npm run deploy` - Build and deploy to Firebase Hosting
- `firebase deploy` - Deploy manually (requires prior build)

### Firebase Setup
- `firebase login` - Authenticate with Firebase
- `firebase init hosting` - Initialize Firebase hosting (first time setup)

## Architecture Overview

This is a React TypeScript educational game for kids with the following architecture:

### Core Structure
- **State Management**: Uses React hooks with centralized state in App.tsx
- **Game Flow**: Three main screens managed by GameStatus enum (LANDING → PLAYING → RESULTS)
- **Question System**: Category-based questions with 30 questions per category (180 total)

### Key Components
- `App.tsx` - Main application component managing global state and routing
- `LandingPage.tsx` - Category selection screen with colorful game cards
- `GamePage.tsx` - Question display and answer selection interface  
- `ResultsScreen.tsx` - Final score display and restart options

### Data Organization
- `types/game.ts` - TypeScript interfaces and enums for type safety
- `data/questions.ts` - All questions organized by GameCategory enum
- Six categories: NUMBERS, VEGETABLES, FRUITS, VEHICLES, COLORS, SHAPES

### Game State Management
The app uses a centralized GameState interface tracking:
- Current category and question index
- Selected answers and feedback state
- Score tracking (correct/wrong answers)
- Question progression through categories

### Styling Approach
- Single CSS file (`App.css`) with component-specific classes
- Kid-friendly design with bright colors and large emoji-based options
- Responsive design supporting desktop, tablet, and mobile

### Firebase Integration
- Configured for hosting with single-page app rewrites
- Build output goes to `build/` directory
- Caching headers configured for static assets

## Development Notes

### Adding New Questions
Edit `src/data/questions.ts` and follow the existing Question interface structure. Each question requires:
- Unique id, text, options array, correctAnswer index
- Optional optionEmojis and optionColors for visual enhancement
- Proper GameCategory assignment

### Adding New Categories
1. Add to GameCategory enum in `types/game.ts`
2. Add questions in `data/questions.ts`
3. Update gameCategories array in `LandingPage.tsx` with emoji and color

### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- React 19 with modern JSX transform
- Target ES5 for broad browser compatibility

### Testing
Uses React Testing Library and Jest with standard Create React App configuration.

## Design Principles
- Always ensure that the questions don't have same emoji in different options