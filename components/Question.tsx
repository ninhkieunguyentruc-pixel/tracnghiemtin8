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
    isSubmitted: boolean;
    onSelect: (questionId: number, index: number) => void;
}> = ({ optionText, index, questionId, isSelected, isCorrect, isSubmitted, onSelect }) => {
  
  const getOptionStyle = () => {
    // Logic sau khi nộp bài
    if (isSubmitted) {
      if (isCorrect) {
        // Đáp án đúng luôn có màu xanh lá
        return 'bg-green-100 border-green-500 text-green-800 font-bold';
      }
      if (isSelected && !isCorrect) {
        // Lựa chọn sai của người dùng có màu đỏ
        return 'bg-red-100 border-red-500 text-red-800 line-through';
      }
      // Các đáp án sai khác không được chọn sẽ bị làm mờ
      return 'bg-gray-100 border-gray-300 text-gray-500 opacity-70';
    }

    // Logic trước khi nộp bài
    if (isSelected) {
      // Lựa chọn hiện tại có màu xanh dương
      return 'bg-blue-100 border-blue-500 font-semibold';
    }
    // Lựa chọn mặc định chưa được chọn
    return 'bg-white hover:bg-blue-50 border-gray-300';
  };

  return (
    <button
      onClick={() => onSelect(questionId, index)}
      disabled={isSubmitted}
      className={`w-full text-left p-3 rounded-lg border-2 transition-colors duration-200 flex items-start ${getOptionStyle()} ${!isSubmitted ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <span className="font-bold mr-3">{getOptionLabel(index)}.</span>
      <span>{optionText}</span>
    </button>
  );
};

const Question: React.FC<QuestionProps> = ({ question, questionNumber, userAnswer, onAnswerSelect, isSubmitted }) => {
  return (
    <div id={`question-${question.id}`} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-5 sm:p-6 transition-shadow duration-300 hover:shadow-xl">
      <p className="text-lg font-semibold mb-4 text-gray-900">
        <span className="font-bold text-blue-700">Câu {questionNumber}:</span> {question.text}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {question.options.map((option, index) => (
          <Option
            key={index}
            optionText={option}
            index={index}
            questionId={question.id}
            isSelected={userAnswer === index}
            isCorrect={index === question.correctAnswerIndex}
            isSubmitted={isSubmitted}
            onSelect={onAnswerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;