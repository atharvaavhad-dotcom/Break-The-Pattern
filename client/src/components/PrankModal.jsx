import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const prankContents = {
  "Banking & Finance": {
    text: "Balance check karne aaye ho?\nAccount me sirf ₹2.75 hai 😭",
    animation: "laugh",
    bgClass: "",
  },
  "Healthcare": {
    text: "Doctor’s diagnosis:\nAttendance kam hai, placement ka fever high 🤒",
    animation: "none",
    bgClass: "",
  },
  "Retail": {
    text: "Tumhari muskaan Amazon ki deal jaisi hai,\nDekhte hi dil add to cart ho gaya ❤️",
    animation: "heart",
    bgClass: "bg-pink-100",
  },
  "Telecom": {
    text: "Network strong hai,\npar crush se reply nahi aa raha 📶💔",
    animation: "none",
    bgClass: "",
  },
  "Manufacturing": {
    text: "Expectation: 10 LPA\nReality: ‘We will get back to you’ 😭",
    animation: "shake",
    bgClass: "",
  },
  "Energy": {
    text: "Energy low ⚡\nCoffee required immediately ☕",
    animation: "none",
    bgClass: "",
  },
};

const PrankModal = ({ industry, onClose }) => {
  const [soundOn, setSoundOn] = useState(false);

  if (!industry) return null;

  const content = prankContents[industry];

  const shakeVariants = {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 },
    },
  };

  const laughVariants = {
    laugh: {
      scale: [1, 1.2, 1],
      transition: { duration: 0.5, repeat: Infinity, repeatDelay: 1 },
    },
  };

  const heartVariants = {
    heart: {
      y: [0, -10, 0],
      transition: { duration: 1, repeat: Infinity },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg max-w-md mx-4 ${content.bgClass}`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-4 text-center">{industry}</h2>
          <div className="text-center mb-4">
            {content.animation === "shake" ? (
              <motion.p
                className="font-bold text-lg"
                variants={shakeVariants}
                animate="shake"
              >
                {content.text}
              </motion.p>
            ) : content.animation === "laugh" ? (
              <div>
                <p className="mb-2">{content.text}</p>
                <motion.span
                  className="text-4xl"
                  variants={laughVariants}
                  animate="laugh"
                >
                  😂
                </motion.span>
              </div>
            ) : content.animation === "heart" ? (
              <div>
                <p className="mb-2">{content.text}</p>
                <motion.span
                  className="text-4xl"
                  variants={heartVariants}
                  animate="heart"
                >
                  💖
                </motion.span>
              </div>
            ) : (
              <p>{content.text}</p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setSoundOn(!soundOn)}
              className="px-3 py-1 bg-gray-200 dark:bg-slate-600 rounded text-sm"
            >
              Sound {soundOn ? "On" : "Off"}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Close
            </button>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            Bas karo yaar, kaam bhi dekh lo 😄
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrankModal;
