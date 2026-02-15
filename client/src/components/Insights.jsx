import { motion } from "framer-motion";
import { useState } from "react";
import InsightsTrapModal from "./InsightsTrapModal";

const insights = [
  {
    title: "AI in Healthcare",
    desc: "Revolutionizing patient care with predictive analytics.",
  },
  {
    title: "Cloud Migration",
    desc: "Modernize your IT infrastructure seamlessly.",
  },
  {
    title: "Digital Transformation",
    desc: "Empowering businesses with agile digital solutions.",
  },
];

export default function Insights() {
  const [trapTopic, setTrapTopic] = useState(null);

  const handleCardClick = (title) => {
    setTrapTopic(title);
  };

  const closeModal = () => {
    setTrapTopic(null);
  };

  return (
    <>
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark dark:text-white">
            Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((insight, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-lg transition cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                onClick={() => handleCardClick(insight.title)}
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {insight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{insight.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {trapTopic && <InsightsTrapModal topic={trapTopic} onClose={closeModal} />}
    </>
  );
}
