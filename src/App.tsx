import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import GamePage from './components/GamePage';
import ResultsScreen from './components/ResultsScreen';
import { GameCategory, GameState, GameStatus } from './types/game';
import { questionsData } from './data/questions';
import './App.css';

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.LANDING);
  const [gameState, setGameState] = useState<GameState>({
    currentCategory: null,
    currentQuestionIndex: 0,
    questions: [],
    selectedAnswer: null,
    showFeedback: false,
    isCorrect: false,
    correctAnswers: 0,
    wrongAnswers: 0
  });

  // Fisher-Yates shuffle algorithm to randomize question order
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleSelectGame = (category: GameCategory) => {
    const categoryQuestions = questionsData[category];
    const shuffledQuestions = shuffleArray(categoryQuestions);
    setGameState({
      currentCategory: category,
      currentQuestionIndex: 0,
      questions: shuffledQuestions,
      selectedAnswer: null,
      showFeedback: false,
      isCorrect: false,
      correctAnswers: 0,
      wrongAnswers: 0
    });
    setGameStatus(GameStatus.PLAYING);
  };

  const handleSelectAnswer = (answerIndex: number) => {
    const currentQuestion = gameState.questions[gameState.currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    setGameState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showFeedback: true,
      isCorrect,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
      wrongAnswers: prev.wrongAnswers + (isCorrect ? 0 : 1)
    }));
  };

  const handleNext = () => {
    const nextIndex = gameState.currentQuestionIndex + 1;
    
    if (nextIndex < gameState.questions.length) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: nextIndex,
        selectedAnswer: null,
        showFeedback: false,
        isCorrect: false
      }));
    } else {
      setGameStatus(GameStatus.RESULTS);
    }
  };

  const handleFinish = () => {
    setGameStatus(GameStatus.RESULTS);
  };

  const handleBack = () => {
    setGameStatus(GameStatus.LANDING);
    setGameState({
      currentCategory: null,
      currentQuestionIndex: 0,
      questions: [],
      selectedAnswer: null,
      showFeedback: false,
      isCorrect: false,
      correctAnswers: 0,
      wrongAnswers: 0
    });
  };

  const handlePlayAgain = () => {
    if (gameState.currentCategory) {
      handleSelectGame(gameState.currentCategory);
    }
  };

  const handleBackToHome = () => {
    setGameStatus(GameStatus.LANDING);
    setGameState({
      currentCategory: null,
      currentQuestionIndex: 0,
      questions: [],
      selectedAnswer: null,
      showFeedback: false,
      isCorrect: false,
      correctAnswers: 0,
      wrongAnswers: 0
    });
  };

  return (
    <div className="App">
      {gameStatus === GameStatus.LANDING && (
        <LandingPage onSelectGame={handleSelectGame} />
      )}
      
      {gameStatus === GameStatus.PLAYING && gameState.questions.length > 0 && (
        <GamePage
          question={gameState.questions[gameState.currentQuestionIndex]}
          selectedAnswer={gameState.selectedAnswer}
          showFeedback={gameState.showFeedback}
          isCorrect={gameState.isCorrect}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNext}
          onBack={handleBack}
          onFinish={handleFinish}
          currentQuestionIndex={gameState.currentQuestionIndex}
          totalQuestions={gameState.questions.length}
        />
      )}

      {gameStatus === GameStatus.RESULTS && gameState.currentCategory && (
        <ResultsScreen
          category={gameState.currentCategory}
          correctAnswers={gameState.correctAnswers}
          wrongAnswers={gameState.wrongAnswers}
          totalQuestions={gameState.questions.length}
          onPlayAgain={handlePlayAgain}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
};

export default App;