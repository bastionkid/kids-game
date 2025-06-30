import React from 'react';
import { Question } from '../types/game';

interface GamePageProps {
  question: Question;
  selectedAnswer: number | null;
  showFeedback: boolean;
  isCorrect: boolean;
  onSelectAnswer: (answerIndex: number) => void;
  onNext: () => void;
  onBack: () => void;
  currentQuestionIndex: number;
  totalQuestions: number;
}

const GamePage: React.FC<GamePageProps> = ({
  question,
  selectedAnswer,
  showFeedback,
  isCorrect,
  onSelectAnswer,
  onNext,
  onBack,
  currentQuestionIndex,
  totalQuestions
}) => {
  return (
    <div className="game-page">
      <div className="question-header">
        <button className="back-button" onClick={onBack}>
          ← Back
        </button>
        <div className="question-counter">
          {currentQuestionIndex + 1} of {totalQuestions}
        </div>
      </div>

      <div className="question-content">
        <h2 className="question-text">{question.text}</h2>
        
        <div className="options-grid">
          {question.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                selectedAnswer === index ? 'selected' : ''
              } ${
                showFeedback && index === question.correctAnswer ? 'correct' : ''
              } ${
                showFeedback && selectedAnswer === index && !isCorrect ? 'incorrect' : ''
              }`}
              onClick={() => !showFeedback && onSelectAnswer(index)}
              disabled={showFeedback}
            >
              {option}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className="feedback-section">
            {isCorrect ? (
              <div className="feedback correct-feedback">
                <div className="thumbs-up">👍 👍 👍</div>
                <p>Great job!</p>
              </div>
            ) : (
              <div className="feedback incorrect-feedback">
                <p>No problem, do better next time!</p>
                <div className="encouragement">You can do it! 💪</div>
              </div>
            )}
            
            <button className="next-button" onClick={onNext}>
              {currentQuestionIndex + 1 < totalQuestions ? 'Next Question' : 'Finish'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;