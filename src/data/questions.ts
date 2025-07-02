import { Question, GameCategory } from '../types/game';
import { numbersQuestions } from './numbers';
import { vegetablesQuestions } from './vegetables';
import { fruitsQuestions } from './fruits';
import { vehiclesQuestions } from './vehicles';
import { colorsQuestions } from './colors';
import { shapesQuestions } from './shapes';

export const questionsData: Record<GameCategory, Question[]> = {
  [GameCategory.NUMBERS]: numbersQuestions,
  [GameCategory.VEGETABLES]: vegetablesQuestions,
  [GameCategory.FRUITS]: fruitsQuestions,
  [GameCategory.VEHICLES]: vehiclesQuestions,
  [GameCategory.COLORS]: colorsQuestions,
  [GameCategory.SHAPES]: shapesQuestions
};