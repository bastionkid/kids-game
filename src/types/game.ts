export interface Question {
  id: number;
  text: string;
  options: string[];
  optionEmojis?: string[];
  optionColors?: string[];
  correctAnswer: number;
  category: GameCategory;
}

export enum GameCategory {
  NUMBERS = 'numbers',
  VEGETABLES = 'vegetables',
  FRUITS = 'fruits',
  VEHICLES = 'vehicles',
  COLORS = 'colors',
  SHAPES = 'shapes'
}

export interface GameState {
  currentCategory: GameCategory | null;
  currentQuestionIndex: number;
  questions: Question[];
  selectedAnswer: number | null;
  showFeedback: boolean;
  isCorrect: boolean;
  correctAnswers: number;
  wrongAnswers: number;
}

export enum GameStatus {
  LANDING = 'landing',
  PLAYING = 'playing',
  RESULTS = 'results'
}