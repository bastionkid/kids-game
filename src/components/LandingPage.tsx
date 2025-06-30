import React from 'react';
import { GameCategory } from '../types/game';

interface LandingPageProps {
  onSelectGame: (category: GameCategory) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onSelectGame }) => {
  const gameCategories = [
    { category: GameCategory.NUMBERS, title: 'Numbers', emoji: '🔢', color: '#FF6B6B' },
    { category: GameCategory.VEGETABLES, title: 'Vegetables', emoji: '🥕', color: '#4ECDC4' },
    { category: GameCategory.FRUITS, title: 'Fruits', emoji: '🍎', color: '#45B7D1' },
    { category: GameCategory.VEHICLES, title: 'Vehicles', emoji: '🚗', color: '#96CEB4' },
    { category: GameCategory.COLORS, title: 'Colors', emoji: '🌈', color: '#FFEAA7' },
    { category: GameCategory.SHAPES, title: 'Shapes', emoji: '🔺', color: '#DDA0DD' }
  ];

  return (
    <div className="landing-page">
      <div className="welcome-header">
        <h1 className="welcome-title">Welcome back, Atharv!</h1>
        <p className="welcome-subtitle">Choose a game to play and learn</p>
      </div>
      
      <div className="games-grid">
        {gameCategories.map((game) => (
          <div
            key={game.category}
            className="game-card"
            style={{ backgroundColor: game.color }}
            onClick={() => onSelectGame(game.category)}
          >
            <div className="game-emoji">{game.emoji}</div>
            <h3 className="game-title">{game.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;