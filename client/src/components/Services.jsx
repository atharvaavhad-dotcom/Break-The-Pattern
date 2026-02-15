import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "AI & Data", desc: "Machine Learning, Analytics, GenAI." },
    { title: "Cloud", desc: "AWS, Azure, DevOps, Migration." },
    { title: "Digital", desc: "Web, Mobile, UX Engineering." },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-dark dark:text-white">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
