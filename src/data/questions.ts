import { Question } from '../types';

export const questions: Question[] = [
  // General
  {
    id: 1,
    text: "What was your biggest achievement this year?",
    type: "long",
    category: "general"
  },
  {
    id: 2,
    text: "What are you most grateful for this year?",
    type: "long",
    category: "general"
  },
  {
    id: 3,
    text: "What was your most memorable moment?",
    type: "long",
    category: "general"
  },

  // Education
  {
    id: 4,
    text: "What new skills did you learn this year?",
    type: "long",
    category: "education"
  },
  {
    id: 5,
    text: "How many books did you read?",
    type: "multiple",
    category: "education",
    options: ["0-5", "6-10", "11-20", "20+"]
  },
  {
    id: 6,
    text: "What was your most valuable learning experience?",
    type: "long",
    category: "education"
  },

  // Finance
  {
    id: 7,
    text: "How would you rate your financial decisions this year?",
    type: "multiple",
    category: "finance",
    options: ["Excellent", "Good", "Fair", "Poor"]
  },
  {
    id: 8,
    text: "What was your best financial decision?",
    type: "long",
    category: "finance"
  },
  {
    id: 9,
    text: "Did you achieve your savings goals?",
    type: "multiple",
    category: "finance",
    options: ["Exceeded", "Met", "Partially Met", "Did Not Meet"]
  },

  // Career
  {
    id: 10,
    text: "What was your biggest professional achievement?",
    type: "long",
    category: "career"
  },
  {
    id: 11,
    text: "How satisfied are you with your career progress?",
    type: "multiple",
    category: "career",
    options: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied"]
  },
  {
    id: 12,
    text: "What new skills did you develop professionally?",
    type: "long",
    category: "career"
  },

  // Social
  {
    id: 13,
    text: "How has your social circle evolved this year?",
    type: "long",
    category: "social"
  },
  {
    id: 14,
    text: "What relationship brought you the most joy?",
    type: "short",
    category: "social"
  },
  {
    id: 15,
    text: "How often did you connect with loved ones?",
    type: "multiple",
    category: "social",
    options: ["Daily", "Weekly", "Monthly", "Rarely"]
  },

  // Spiritual
  {
    id: 16,
    text: "How has your spiritual journey evolved?",
    type: "long",
    category: "spiritual"
  },
  {
    id: 17,
    text: "What practices helped your inner growth?",
    type: "long",
    category: "spiritual"
  },
  {
    id: 18,
    text: "How often did you practice mindfulness?",
    type: "multiple",
    category: "spiritual",
    options: ["Daily", "Weekly", "Monthly", "Rarely"]
  },

  // Health
  {
    id: 19,
    text: "How would you rate your overall health this year?",
    type: "multiple",
    category: "health",
    options: ["Excellent", "Good", "Fair", "Poor"]
  },
  {
    id: 20,
    text: "What healthy habits did you develop?",
    type: "long",
    category: "health"
  },
  {
    id: 21,
    text: "How consistent were you with exercise?",
    type: "multiple",
    category: "health",
    options: ["Very Consistent", "Somewhat Consistent", "Inconsistent", "Did Not Exercise"]
  },

  // Wellbeing
  {
    id: 22,
    text: "How would you rate your work-life balance?",
    type: "multiple",
    category: "wellbeing",
    options: ["Excellent", "Good", "Fair", "Poor"]
  },
  {
    id: 23,
    text: "What brought you the most joy this year?",
    type: "long",
    category: "wellbeing"
  },
  {
    id: 24,
    text: "How did you practice self-care?",
    type: "long",
    category: "wellbeing"
  }
];