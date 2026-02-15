import { motion } from "framer-motion";

const industries = [
  "Banking & Finance",
  "Healthcare",
  "Retail",
  "Telecom",
  "Manufacturing",
  "Energy",
];

export default function Industries() {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark dark:text-white">
          Industries We Serve
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 dark:bg-slate-700 rounded-lg p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-primary">{industry}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
