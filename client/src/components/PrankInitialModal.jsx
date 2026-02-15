import { motion, AnimatePresence } from "framer-motion";

const PrankInitialModal = ({ onYes, onNo, onClose }) => {
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
          className="bg-white dark:bg-slate-700 p-8 rounded-xl shadow-lg max-w-md mx-4 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">Anand Bedre CEO hai 😎</h2>
          <p className="text-lg mb-6">Username aur Password chahiye kya?</p>
          <div className="flex justify-center gap-4">
            <motion.button
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onYes}
            >
              ✅ YES
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNo}
            >
              ❌ NO
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PrankInitialModal;
