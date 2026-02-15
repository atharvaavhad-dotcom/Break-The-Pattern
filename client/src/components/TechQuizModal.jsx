import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// ---------------- RAW QUESTIONS ----------------
const rawQuestions = [
  {
    company: "Amazon (Intern)",
    question: "Time complexity of Binary Search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    company: "Flipkart",
    question: "Which React hook manages state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    company: "Google (2024)",
    question: "Which traversal uses stack internally?",
    options: ["BFS", "DFS", "Level Order", "None"],
    answer: "DFS",
  },
  {
    company: "Microsoft",
    question: "Normalization removes?",
    options: ["Redundancy", "Indexes", "Keys", "Triggers"],
    answer: "Redundancy",
  },
  {
    company: "Paytm",
    question: "Node.js runs on?",
    options: ["V8 Engine", "Java VM", "Python Engine", "Apache"],
    answer: "V8 Engine",
  },
  {
    company: "Swiggy",
    question: "Which SQL clause filters rows?",
    options: ["GROUP BY", "WHERE", "ORDER BY", "JOIN"],
    answer: "WHERE",
  },
  {
    company: "Uber",
    question: "Promise handles?",
    options: ["Async operations", "CSS", "Database", "Memory"],
    answer: "Async operations",
  },
  {
    company: "IBM",
    question: "Big O of Merge Sort?",
    options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    company: "Oracle",
    question: "Deadlock occurs when?",
    options: [
      "Processes wait forever",
      "CPU idle",
      "Memory full",
      "Disk slow",
    ],
    answer: "Processes wait forever",
  },
  {
    company: "Adobe",
    question: "Flexbox main axis controlled by?",
    options: ["align-items", "justify-content", "flex-wrap", "display"],
    answer: "justify-content",
  },
];

// ---------------- Shuffle Function ----------------
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const prepareQuestions = () => {
  return rawQuestions.map((q) => {
    const shuffledOptions = shuffleArray(q.options);
    return {
      ...q,
      options: shuffledOptions,
      correct: shuffledOptions.indexOf(q.answer),
    };
  });
};

const TechQuizModal = ({ onClose }) => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setQuestions(prepareQuestions());
  }, []);

  if (!questions.length) return null;

  const handleAnswer = (index) => {
    setSelected(index);

    if (index === questions[current].correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 500);
  };

  const progress = ((current + 1) / questions.length) * 100;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full h-full bg-white dark:bg-slate-900 p-10 overflow-y-auto"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
        >
          {!finished ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  Medium Placement Test 💻
                </h2>
                <button onClick={onClose} className="text-red-500">
                  Exit ❌
                </button>
              </div>

              <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 mb-6">
                <div
                  className="bg-indigo-600 h-3 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <p className="text-sm text-gray-500 mb-4">
                Recently asked in {questions[current].company}
              </p>

              <h3 className="text-xl font-semibold mb-6">
                Q{current + 1}. {questions[current].question}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {questions[current].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    disabled={selected !== null}
                    className={`p-4 rounded-lg border transition ${
                      selected === i
                        ? i === questions[current].correct
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-gray-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-slate-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center mt-20">
              <h2 className="text-3xl font-bold mb-6">
                Test Completed 🎓
              </h2>

              <p className="text-xl mb-4">
                Your Score: {score} / 10
              </p>

              {score >= 7 ? (
                <>
                  <h3 className="text-green-600 font-bold text-2xl mb-6">
                    ✅ You Passed! Placement Ready 🚀
                  </h3>

                  <div className="bg-gray-100 dark:bg-slate-800 p-6 rounded-xl inline-block text-left shadow-lg">
                    <p className="mb-2">
                      <b>Username:</b> ceo_access
                    </p>
                    <p>
                      <b>Password:</b> brainbuzz_placement
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-red-500 text-xl mb-4">
                    ❌ Need More Practice
                  </h3>
                  <p>Revise DSA + Core Subjects and try again 💪</p>
                </>
              )}

              <div className="mt-8">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechQuizModal;
