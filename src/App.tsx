import React, { useState } from 'react';
import { UserProfile, Answer } from './types';
import WelcomePage from './components/WelcomePage';
import UserProfileForm from './components/UserProfile';
import QuestionCard from './components/QuestionCard';
import YearReport from './components/YearReport';
import CategoryIntro from './components/CategoryIntro';
import { questions } from './data/questions';

type AppState = 'welcome' | 'profile' | 'category-intro' | 'questions' | 'complete';

function App() {
  const [state, setState] = useState<AppState>('welcome');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>('');

  const handleStart = () => {
    setState('profile');
  };

  const handleProfileComplete = (userProfile: UserProfile) => {
    setProfile(userProfile);
    const firstCategory = questions[0].category;
    setCurrentCategory(firstCategory);
    setState('category-intro');
  };

  const handleCategoryIntroComplete = () => {
    setState('questions');
  };

  const handleAnswer = (answer: Answer) => {
    setAnswers(prev => {
      const existingIndex = prev.findIndex(a => a.questionId === answer.questionId);
      if (existingIndex >= 0) {
        const newAnswers = [...prev];
        newAnswers[existingIndex] = answer;
        return newAnswers;
      }
      return [...prev, answer];
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextQuestion = questions[currentQuestionIndex + 1];
      if (nextQuestion.category !== currentCategory) {
        setCurrentCategory(nextQuestion.category);
        setState('category-intro');
      }
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setState('complete');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      const prevQuestion = questions[currentQuestionIndex - 1];
      if (prevQuestion.category !== currentCategory) {
        setCurrentCategory(prevQuestion.category);
      }
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  switch (state) {
    case 'welcome':
      return <WelcomePage onStart={handleStart} />;
    case 'profile':
      return <UserProfileForm onComplete={handleProfileComplete} />;
    case 'category-intro':
      return (
        <CategoryIntro
          category={currentCategory}
          onContinue={handleCategoryIntroComplete}
        />
      );
    case 'questions':
      return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 flex items-center justify-center">
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            <div className="text-center md:text-left text-white">
              <h2 className="text-4xl text-center font-bold mb-2">Reflect on Your Year</h2>
              <p className="text-xl text-center text-gray-300 mb-2">
                Take a moment to think about the milestones, challenges, and triumphs that defined your year. Answer each question thoughtfully.
              </p>
              <div className='hidden md:block'>
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/08/05/16/boy-1807518_640.jpg"
                  alt="Reflective moment"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
            </div>
            <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            currentAnswer={
              answers.find(a => a.questionId === questions[currentQuestionIndex].id)
                ?.answer
            }
            totalQuestions={questions.length}
            currentNumber={currentQuestionIndex + 1}
          />
          </div>
          
          
        </div>
      );
    case 'complete':
      return profile && <YearReport questions={questions} profile={profile} answers={answers} />;
    default:
      return null;
  }
}

export default App;