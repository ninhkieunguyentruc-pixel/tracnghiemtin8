
import React from 'react';

interface ResultProps {
  correctAnswersCount: number;
  totalQuestions: number;
  score: number;
}

const Result: React.FC<ResultProps> = ({ correctAnswersCount, totalQuestions, score }) => {
  const getFeedback = () => {
    if (score >= 9) return { text: "Xuất sắc! Bạn là một chuyên gia Tin học thực thụ.", color: "text-blue-600", bg: "bg-blue-50" };
    if (score >= 7) return { text: "Rất tốt! Bạn nắm vững kiến thức rồi đó.", color: "text-green-600", bg: "bg-green-50" };
    if (score >= 5) return { text: "Khá ổn. Hãy ôn tập kỹ hơn những câu sai nhé.", color: "text-yellow-600", bg: "bg-yellow-50" };
    return { text: "Cần cố gắng nhiều hơn nữa bạn nhé! Đừng bỏ cuộc.", color: "text-red-600", bg: "bg-red-50" };
  };

  const feedback = getFeedback();

  return (
    <div className={`rounded-3xl shadow-xl p-8 mb-10 text-center border-2 border-white overflow-hidden relative ${feedback.bg}`}>
      {/* Decorative background elements */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/40 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-black text-gray-800 mb-6 uppercase tracking-widest">
          Tổng kết bài làm
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm w-full md:w-auto">
            <span className="block text-gray-500 text-sm uppercase font-bold mb-1">Số câu đúng</span>
            <span className="text-4xl font-black text-green-600">
              {correctAnswersCount} <span className="text-gray-300 text-xl">/ {totalQuestions}</span>
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm w-full md:w-auto border-t-4 border-blue-500">
            <span className="block text-gray-500 text-sm uppercase font-bold mb-1">Điểm số</span>
            <span className="text-5xl font-black text-blue-600">{score.toFixed(1)}</span>
          </div>
        </div>

        <div className={`p-4 rounded-xl inline-block px-8 ${feedback.color} font-bold text-lg animate-bounce`}>
          {feedback.text}
        </div>

        <div className="mt-8 text-gray-500 text-sm italic">
          Hãy kéo xuống dưới để xem chi tiết đáp án của từng câu.
        </div>
      </div>
    </div>
  );
};

export default Result;
