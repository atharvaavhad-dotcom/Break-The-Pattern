import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

const topicData = {
  "Verbal Ability Challenge": {
    paragraph:
      "Agar ye solve kar liya… to next hint bata dunga 😏🔥\n\nCompanies mein frequently puche jaane wale easy verbal questions. Chill hai… bas dhyaan se padho!",

    questions: [
      {
        question: "Choose the correct synonym of 'Rapid':",
        options: ["Slow", "Fast", "Late", "Weak"],
        correct: 1,
        explanation: "'Rapid' ka matlab hota hai fast ya quick.",
      },
      {
        question: "Choose the correct antonym of 'Expand':",
        options: ["Grow", "Increase", "Shrink", "Develop"],
        correct: 2,
        explanation: "'Expand' ka opposite hota hai shrink.",
      },
      {
        question: "Fill in the blank: She ___ to the market yesterday.",
        options: ["Go", "Goes", "Went", "Going"],
        correct: 2,
        explanation: "Yesterday past tense hai, isliye 'went' sahi hai.",
      },
      {
        question: "Find the correctly spelled word:",
        options: ["Definately", "Definitely", "Definatly", "Definetly"],
        correct: 1,
        explanation: "Correct spelling hai 'Definitely'.",
      },
      {
        question: "Communication skills are important in job interviews.",
        options: ["True", "False"],
        correct: 0,
        explanation:
          "Bilkul! Communication skills almost har company mein important hote hain.",
      },
    ],
  },
};

const InsightsTrapModal = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const questions = topicData["Verbal Ability Challenge"].questions;

  const handleAnswerChange = (idx, value) => {
    setAnswers({ ...answers, [idx]: value });
  };

  const handleSubmit = () => {
    let correct = true;

    questions.forEach((q, idx) => {
      if (answers[idx] !== q.correct) {
        correct = false;
      }
    });

    if (correct) {
      setAllCorrect(true);
      setShowConfetti(true);
    }

    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {showConfetti && <Confetti />}

        <motion.div
          className="w-full h-full bg-white dark:bg-slate-800 p-10 overflow-y-auto"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
        >
          <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
            😈 Ab aaye ho toh solve karke hi jaoge!
          </h2>

          <p className="text-center mb-10 text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {topicData["Verbal Ability Challenge"].paragraph}
          </p>

          {questions.map((q, idx) => (
            <div key={idx} className="mb-10">
              <p className="font-semibold text-lg mb-4">
                {idx + 1}. {q.question}
              </p>

              <div className="grid grid-cols-2 gap-4">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`px-4 py-2 rounded border ${
                      answers[idx] === i
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 dark:bg-slate-600"
                    }`}
                    onClick={() => handleAnswerChange(idx, i)}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {submitted && (
                <div className="mt-4 p-4 bg-gray-100 dark:bg-slate-700 rounded">
                  <p className="font-bold">
                    ✅ Correct Answer: {q.options[q.correct]}
                  </p>
                  <p className="text-sm mt-2">{q.explanation}</p>
                </div>
              )}
            </div>
          ))}

          {!submitted && (
            <div className="text-center">
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Sure ho na? 😏
              </button>
            </div>
          )}

          {submitted && (
            <div className="text-center mt-10">
              {allCorrect ? (
                <>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    😌 Dimag lagaya… Respect! Next hint unlocked 🔓
                  </h3>
                  <p className="mb-4">
                    🔎 Hint: Grammar + Synonyms daily revise karo.
                  </p>
                  <p className="italic text-gray-600">
                    “Dost ko bol dena… aaj tu top form mein tha 😎🔥”
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-red-600 mb-4">
                    😏 Thoda aur practice karo boss…
                  </h3>
                  <p className="mb-4">
                    🔎 Hint: khud dhund le bhai .... 😂 
                  </p>
                  <p className="italic text-gray-600">
                    “Engineering kiya hai… English se mat dar yaar 😂”
                  </p>
                </>
              )}

              <button
                onClick={() => navigate("/")}
                className="mt-6 px-6 py-2 bg-blue-500 text-white rounded"
              >
                Back to Home
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InsightsTrapModal;
