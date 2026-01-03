
import React, { useState, useMemo, useEffect } from 'react';
import { questions } from './data/questions';
import type { Question as QuestionType } from './types';
import Question from './components/Question';
import Result from './components/Result';

const TIMER_SECONDS = 45 * 60; // 45 phút

const App: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>(() => {
    const saved = localStorage.getItem('tin8_answers');
    return saved ? JSON.parse(saved) : {};
  });
  const [isSubmitted, setIsSubmitted] = useState(() => {
    return localStorage.getItem('tin8_submitted') === 'true';
  });
  const [isGraded, setIsGraded] = useState(() => {
    return localStorage.getItem('tin8_graded') === 'true';
  });
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [showNav, setShowNav] = useState(false);

  // Lưu trạng thái vào localStorage
  useEffect(() => {
    localStorage.setItem('tin8_answers', JSON.stringify(userAnswers));
    localStorage.setItem('tin8_submitted', isSubmitted.toString());
    localStorage.setItem('tin8_graded', isGraded.toString());
  }, [userAnswers, isSubmitted, isGraded]);

  // Bộ đếm thời gian
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsSubmitted(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    if (isSubmitted) return;
    if (userAnswers[questionId] !== undefined) return;
    
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < questions.length) {
      if (!confirm(`Bạn mới trả lời ${answeredCount}/${questions.length} câu. Bạn có muốn kết thúc bài thi ngay bây giờ?`)) {
        return;
      }
    }
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGrade = () => {
    setIsGraded(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (confirm('Bạn muốn xóa hết kết quả và làm lại từ đầu?')) {
      setUserAnswers({});
      setIsSubmitted(false);
      setIsGraded(false);
      setTimeLeft(TIMER_SECONDS);
      localStorage.removeItem('tin8_answers');
      localStorage.removeItem('tin8_submitted');
      localStorage.removeItem('tin8_graded');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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

  const scrollToQuestion = (id: number) => {
    const element = document.getElementById(`question-${id}`);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setShowNav(false);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-slate-50">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-xl font-bold text-blue-800">TRẮC NGHIỆM TIN 8</h1>
              <p className="text-[10px] text-blue-400 uppercase tracking-tighter">Hỗ trợ check đáp án tức thì</p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono font-bold shadow-inner ${timeLeft < 300 && !isSubmitted ? 'bg-red-50 text-red-600 animate-pulse' : 'bg-blue-50 text-blue-700'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              {isSubmitted ? "ĐÃ NỘP BÀI" : formatTime(timeLeft)}
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200">
            <div 
              className={`h-full transition-all duration-700 ease-out ${isGraded ? 'bg-green-500' : 'bg-blue-500'}`}
              style={{ width: `${(Object.keys(userAnswers).length / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1.5 text-xs font-bold">
            <span className="text-gray-500 uppercase">Tiến độ: {Object.keys(userAnswers).length} / {questions.length} câu</span>
            <button 
              onClick={() => setShowNav(!showNav)}
              className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 bg-indigo-50 px-2 py-0.5 rounded"
            >
              LƯỚI CÂU HỎI
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${showNav ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {showNav && (
          <div className="absolute top-full left-0 right-0 bg-white/98 border-b border-blue-100 shadow-2xl max-h-[70vh] overflow-y-auto p-5 z-40 animate-in fade-in slide-in-from-top-2">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs font-bold text-gray-400 mb-3 uppercase">Danh sách câu hỏi:</p>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {questions.map((q, idx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isCorrect = isGraded && userAnswers[q.id] === q.correctAnswerIndex;
                  const isWrong = isGraded && isAnswered && userAnswers[q.id] !== q.correctAnswerIndex;
                  
                  return (
                    <button
                      key={q.id}
                      onClick={() => scrollToQuestion(q.id)}
                      className={`h-10 rounded-lg text-xs font-bold border-2 transition-all ${
                        isGraded 
                          ? (isCorrect ? 'bg-green-500 border-green-600 text-white shadow-green-200' : isWrong ? 'bg-red-500 border-red-600 text-white shadow-red-200' : 'bg-white border-gray-200 text-gray-400')
                          : (isAnswered ? 'bg-blue-600 border-blue-700 text-white shadow-blue-100' : 'bg-white border-gray-200 text-gray-400 hover:border-blue-300')
                      } shadow-sm`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-4xl mx-auto p-4 sm:p-6 pb-32">
        {isSubmitted && !isGraded && (
          <div className="bg-blue-600 text-white rounded-2xl p-6 mb-8 shadow-lg text-center animate-pulse">
            <h2 className="text-2xl font-bold mb-2">BÀI THI ĐÃ KẾT THÚC</h2>
            <p className="mb-4 opacity-90">Hệ thống đã ghi nhận các đáp án của bạn. Nhấn nút bên dưới để xem điểm số.</p>
            <button
              onClick={handleGrade}
              className="bg-white text-blue-600 font-black py-3 px-8 rounded-xl text-xl hover:bg-blue-50 transition-colors shadow-md"
            >
              CHẤM ĐIỂM & XEM KẾT QUẢ
            </button>
          </div>
        )}

        {isGraded && (
          <div className="animate-in zoom-in duration-500">
            <Result 
              correctAnswersCount={correctAnswersCount}
              totalQuestions={questions.length}
              score={score}
            />
          </div>
        )}

        <div className="space-y-6 mt-4">
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
        
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 z-30 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.05)]">
          <div className="max-w-4xl mx-auto flex gap-4">
            <button
              onClick={handleReset}
              className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-600 font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
            >
              Làm lại
            </button>
            {!isSubmitted ? (
              <button
                onClick={handleSubmit}
                className="flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-lg transition-all transform active:scale-95 shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
              >
                KẾT THÚC BÀI LÀM
              </button>
            ) : !isGraded && (
              <button
                onClick={handleGrade}
                className="flex-[2] bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl text-lg transition-all transform active:scale-95 shadow-lg shadow-green-100"
              >
                CHẤM ĐIỂM NGAY
              </button>
            )}
          </div>
        </div>
      </main>

      <div className="fixed bottom-24 right-4 text-[8px] text-blue-200 font-bold pointer-events-none rotate-90 origin-right">
        TRẮC NGHIỆM TIN HỌC 8
      </div>
    </div>
  );
};

export default App;
