import React, { useState, useMemo } from 'react';
import { questions } from './data/questions';
import type { Question as QuestionType } from './types';
import Question from './components/Question';
import Result from './components/Result';

const App: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    if (isSubmitted) return;

    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(userAnswers).length !== questions.length) {
      alert('Vui lòng trả lời hết tất cả các câu hỏi trước khi nộp bài!');
      return;
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { correctAnswersCount, score } = useMemo(() => {
    const correctCount = questions.reduce((count, question) => {
      if (userAnswers[question.id] === question.correctAnswerIndex) {
        return count + 1;
      }
      return count;
    }, 0);

    const calculatedScore = (correctCount / questions.length) * 10;
    return {
      correctAnswersCount: correctCount,
      score: parseFloat(calculatedScore.toFixed(1))
    };
  }, [userAnswers]);

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 tracking-tight">
            TRẮC NGHIỆM TIN HỌC 8 – GIỮA KÌ 1
          </h1>
        </header>

        {isSubmitted && (
          <Result 
            correctAnswersCount={correctAnswersCount}
            totalQuestions={questions.length}
            score={score}
          />
        )}

        <div className="space-y-6">
          {questions.map((question, index) => (
            <Question
              key={question.id}
              question={question}
              questionNumber={index + 1}
              userAnswer={userAnswers[question.id]}
              onAnswerSelect={handleAnswerSelect}
              isSubmitted={isSubmitted}
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Nộp bài
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-12 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Làm lại
            </button>
          )}
        </div>

      </main>
      <div className="fixed bottom-4 right-4 text-sm text-pink-500 italic font-serif select-none font-medium">
        ninh kiều
      </div>
    </div>
  );
};

export default App;