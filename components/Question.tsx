
import React from 'react';
import type { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  userAnswer?: number;
  onAnswerSelect: (questionId: number, answerIndex: number) => void;
  isSubmitted: boolean;
}

const getOptionLabel = (index: number) => {
  return String.fromCharCode(65 + index); // A, B, C, D
};

const Option: React.FC<{
    optionText: string;
    index: number;
    questionId: number;
    isSelected: boolean;
    isCorrect: boolean;
    isRevealed: boolean; // Trạng thái đã check đáp án
    isSubmitted: boolean;
    onSelect: (questionId: number, index: number) => void;
}> = ({ optionText, index, questionId, isSelected, isCorrect, isRevealed, isSubmitted, onSelect }) => {
  
  const getOptionStyle = () => {
    // Nếu đã nộp bài HOẶC đã chọn đáp án (để check luôn)
    if (isSubmitted || isRevealed) {
      if (isCorrect) {
        return 'bg-green-100 border-green-500 text-green-800 font-bold ring-2 ring-green-200';
      }
      if (isSelected && !isCorrect) {
        return 'bg-red-100 border-red-500 text-red-800 ring-2 ring-red-200';
      }
      return 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
    }

    // Trạng thái bình thường chưa chọn
    if (isSelected) {
      return 'bg-blue-50 border-blue-600 text-blue-700 ring-2 ring-blue-100 font-bold';
    }
    return 'bg-white hover:bg-blue-50/50 border-gray-200 hover:border-blue-300 text-gray-700';
  };

  return (
    <button
      onClick={() => onSelect(questionId, index)}
      disabled={isSubmitted || isRevealed} // Khóa sau khi đã check
      className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 shadow-sm ${getOptionStyle()} ${!(isSubmitted || isRevealed) ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'}`}
    >
      <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
        isCorrect && (isSubmitted || isRevealed) ? 'bg-green-600 text-white' :
        isSelected && !isCorrect && (isSubmitted || isRevealed) ? 'bg-red-600 text-white' :
        isSelected ? 'bg-blue-600 text-white' : 
        'bg-gray-100 text-gray-500'
      }`}>
        {getOptionLabel(index)}
      </span>
      <span className="pt-1 flex-1">{optionText}</span>
      
      {(isSubmitted || isRevealed) && isCorrect && (
        <span className="ml-auto text-green-600 font-bold flex items-center gap-1">
          ✅ <span className="hidden sm:inline text-xs">Đúng</span>
        </span>
      )}
      {(isSubmitted || isRevealed) && isSelected && !isCorrect && (
        <span className="ml-auto text-red-600 font-bold flex items-center gap-1">
          ❌ <span className="hidden sm:inline text-xs">Sai</span>
        </span>
      )}
    </button>
  );
};

const Question: React.FC<QuestionProps> = ({ question, questionNumber, userAnswer, onAnswerSelect, isSubmitted }) => {
  // Biến check: Nếu người dùng đã chọn đáp án thì coi như đã "tiết lộ" kết quả cho câu đó
  const isRevealed = userAnswer !== undefined;

  return (
    <div id={`question-${question.id}`} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 transition-all hover:shadow-md scroll-mt-24">
      <div className="flex items-start gap-4 mb-6">
        <span className="bg-blue-800 text-white text-sm font-black px-3 py-1 rounded-lg flex-shrink-0">
          CÂU {questionNumber}
        </span>
        <h3 className="text-lg md:text-xl font-medium leading-relaxed text-gray-900">
          {question.text}
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <Option
            key={index}
            optionText={option}
            index={index}
            questionId={question.id}
            isSelected={userAnswer === index}
            isCorrect={index === question.correctAnswerIndex}
            isRevealed={isRevealed}
            isSubmitted={isSubmitted}
            onSelect={onAnswerSelect}
          />
        ))}
      </div>
      
      {isRevealed && !isSubmitted && (
        <div className="mt-4 p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-sm flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Bạn đã kiểm tra đáp án câu này. Tiếp tục làm các câu khác nhé!
        </div>
      )}
    </div>
  );
};

export default Question;
