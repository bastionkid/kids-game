import React from 'react';
import { GameCategory } from '../types/game';

interface ResultsScreenProps {
  category: GameCategory;
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onBackToHome: () => void;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({
  category,
  correctAnswers,
  wrongAnswers,
  totalQuestions,
  onPlayAgain,
  onBackToHome
}) => {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  const getCategoryEmoji = (cat: GameCategory) => {
    switch (cat) {
      case GameCategory.NUMBERS: return '🔢';
      case GameCategory.VEGETABLES: return '🥕';
      case GameCategory.FRUITS: return '🍎';
      case GameCategory.VEHICLES: return '🚗';
      case GameCategory.COLORS: return '🌈';
      case GameCategory.SHAPES: return '🔺';
      default: return '🎮';
    }
  };

  const getEncouragementMessage = () => {
    if (percentage >= 90) return "Outstanding! You're a superstar! 🌟";
    if (percentage >= 80) return "Excellent work! Keep it up! 🎉";
    if (percentage >= 70) return "Great job! You're doing amazing! 👏";
    if (percentage >= 60) return "Good work! Practice makes perfect! 💪";
    return "Keep trying! You're learning so much! 🚀";
  };

  const getPerformanceEmoji = () => {
    if (percentage >= 90) return "🏆";
    if (percentage >= 80) return "🥇";
    if (percentage >= 70) return "🥈";
    if (percentage >= 60) return "🥉";
    return "🌟";
  };

  return (
    <div className="results-screen">
      <div className="results-header">
        <div className="category-info">
          <div className="category-emoji">{getCategoryEmoji(category)}</div>
          <h1 className="results-title">{category.charAt(0).toUpperCase() + category.slice(1)} Complete!</h1>
        </div>
        
        <div className="performance-badge">
          <div className="performance-emoji">{getPerformanceEmoji()}</div>
          <div className="percentage">{percentage}%</div>
        </div>
      </div>

      <div className="score-summary">
        <div className="score-card correct">
          <div className="score-icon">✅</div>
          <div className="score-number">{correctAnswers}</div>
          <div className="score-label">Correct</div>
        </div>
        
        <div className="score-divider">of</div>
        
        <div className="score-card total">
          <div className="score-icon">📝</div>
          <div className="score-number">{totalQuestions}</div>
          <div className="score-label">Total</div>
        </div>
        
        <div className="score-card wrong">
          <div className="score-icon">❌</div>
          <div className="score-number">{wrongAnswers}</div>
          <div className="score-label">Wrong</div>
        </div>
      </div>

      <div className="encouragement-section">
        <p className="encouragement-message">{getEncouragementMessage()}</p>
      </div>

      <div className="action-buttons">
        <button className="action-button secondary" onClick={onPlayAgain}>
          <span className="button-emoji">🔄</span>
          Play Again
        </button>
        
        <button className="action-button primary" onClick={onBackToHome}>
          <span className="button-emoji">🏠</span>
          Choose New Game
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;