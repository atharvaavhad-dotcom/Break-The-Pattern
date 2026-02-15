import { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "If 2 + 2 × 2 = ?",
    options: ["6", "8", "4", "10"],
    correct: 0,
    explanation: "BODMAS rule. 2×2=4, then +2 = 6.",
  },
  {
    question: "Find next number: 2, 4, 8, 16, ?",
    options: ["18", "24", "32", "20"],
    correct: 2,
    explanation: "Pattern is ×2 each time.",
  },
  {
    question: "If 10 workers finish work in 5 days, 5 workers take?",
    options: ["10 days", "5 days", "2 days", "15 days"],
    correct: 0,
    explanation: "Half workers → double time.",
  },
];

const AdminQuiz = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correctCount = 0;

    questions.forEach((q, i) => {
      if (answers[i] === q.correct) correctCount++;
    });

    setScore(correctCount);
    setSubmitted(true);

    if (correctCount >= 2) {
      setTimeout(() => {
        navigate("/admin-portal");
      }, 3000);
    }
  };

  return (
    <div className="w-full h-screen bg-black text-white p-10 overflow-auto">
      <h1 className="text-3xl mb-8 text-green-400">
        🧠 Solve 2 Questions to Access Admin Portal
      </h1>

      {questions.map((q, i) => (
        <div key={i} className="mb-8">
          <p className="mb-4">{i + 1}. {q.question}</p>
          {q.options.map((opt, index) => (
            <button
              key={index}
              className="block mb-2 bg-gray-800 px-4 py-2"
              onClick={() => setAnswers({ ...answers, [i]: index })}
            >
              {opt}
            </button>
          ))}

          {submitted && (
            <div className="mt-2 text-green-400">
              ✅ Correct: {q.options[q.correct]}  
              <p className="text-sm">{q.explanation}</p>
            </div>
          )}
        </div>
      ))}

      {!submitted && (
        <button
          onClick={handleSubmit}
          className="bg-green-500 px-6 py-2"
        >
          Submit
        </button>
      )}

      {submitted && score < 2 && (
        <h2 className="text-red-500 mt-6">
          ❌ Access Denied. Practice kar boss 😈
        </h2>
      )}
    </div>
  );
};

export default AdminQuiz;
