
import React from 'react';

interface ResultProps {
  correctAnswersCount: number;
  totalQuestions: number;
  score: number;
}

const Result: React.FC<ResultProps> = ({ correctAnswersCount, totalQuestions, score }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 sm:p-8 my-8 text-center border-t-8 border-blue-500">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Kết quả bài làm</h2>
      <div className="space-y-3 text-lg md:text-xl text-gray-700">
        <p className="font-semibold">
          ✅ Bạn đúng <span className="text-green-600 font-extrabold">{correctAnswersCount}</span> / <span className="font-extrabold">{totalQuestions}</span> câu
        </p>
        <p className="font-semibold">
          🎯 Điểm số của bạn là: <span className="text-blue-600 font-extrabold text-2xl md:text-3xl">{score}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
