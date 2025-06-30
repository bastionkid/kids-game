# Kids Learning Game 🎮

A fun and interactive learning game for kids featuring 6 different categories with 30 questions each!

## Features ✨

- **6 Learning Categories**: Numbers, Vegetables, Fruits, Vehicles, Colors, Shapes
- **180 Total Questions**: 30 questions per category
- **Kid-Friendly Design**: Colorful interface with animations
- **Score Tracking**: Shows correct/wrong answers at the end
- **Responsive**: Works on desktop, tablet, and mobile

## Categories 📚

- 🔢 **Numbers**: Counting, basic math, number recognition
- 🥕 **Vegetables**: Identification, colors, characteristics
- 🍎 **Fruits**: Types, colors, growing patterns
- 🚗 **Vehicles**: Transportation types, emergency vehicles
- 🌈 **Colors**: Color mixing, identification, associations
- 🔺 **Shapes**: Geometry basics, real-world examples

## Getting Started 🚀

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- Firebase CLI

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd kids-game
```

2. Install dependencies
```bash
npm install
```

3. Install Firebase CLI globally (if not already installed)
```bash
npm install -g firebase-tools
```

### Local Development

1. Start the development server
```bash
npm start
```

2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Firebase Hosting Deployment 🔥

#### Step 1: Setup Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Enable Hosting in the Firebase console

#### Step 2: Login to Firebase

```bash
firebase login
```

#### Step 3: Initialize Firebase (if first time)

```bash
firebase init hosting
```

When prompted:
- Select your Firebase project
- Choose `build` as your public directory
- Configure as single-page app: **Yes**
- Overwrite index.html: **No**

#### Step 4: Update Project ID

Edit `.firebaserc` file and replace `"your-firebase-project-id"` with your actual Firebase project ID:

```json
{
  "projects": {
    "default": "your-actual-project-id"
  }
}
```

#### Step 5: Build and Deploy

```bash
npm run deploy
```

This command will:
1. Build the React app for production
2. Deploy to Firebase Hosting

#### Alternative Commands

- **Build only**: `npm run build`
- **Test locally before deploy**: `npm run firebase:serve`
- **Deploy manually**: `firebase deploy`

### Deployment URL 🌐

After successful deployment, your game will be available at:
```
https://your-project-id.web.app
```

## Project Structure 📁

```
src/
├── components/
│   ├── LandingPage.tsx      # Main menu with game categories
│   ├── GamePage.tsx         # Question and answer interface
│   └── ResultsScreen.tsx    # Final score display
├── data/
│   └── questions.ts         # All 180 questions organized by category
├── types/
│   └── game.ts             # TypeScript type definitions
├── App.tsx                 # Main app component
├── App.css                 # Styling
└── index.tsx              # Entry point
```

## Customization 🎨

### Adding More Questions
Edit `src/data/questions.ts` to add more questions to any category.

### Changing Colors/Styling
Modify `src/App.css` to customize the appearance.

### Adding New Categories
1. Add new category to `GameCategory` enum in `src/types/game.ts`
2. Add questions in `src/data/questions.ts`
3. Update landing page in `src/components/LandingPage.tsx`

## Contributing 🤝

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License 📄

This project is created for educational purposes.

---

Made with ❤️ for Atharv's learning adventure!