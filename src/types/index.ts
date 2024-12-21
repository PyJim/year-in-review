export type QuestionType = 'multiple' | 'short' | 'long';

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  category: string;
  options?: string[];
}

export interface UserProfile {
  name: string;
  photo?: string;
  bio: string;
}

export interface Answer {
  questionId: number;
  answer: string;
}