import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";

const services = [
  {
    title: "AI & Data",
    desc: "Machine Learning, Analytics, GenAI solutions.",
    icon: "/assets/ai-icon.svg",
  },
  {
    title: "Cloud",
    desc: "AWS, Azure, DevOps, Migration & Cloud transformation.",
    icon: "/assets/cloud-icon.svg",
  },
  {
    title: "Digital",
    desc: "Web, Mobile, UX/UI Design, Digital Transformation.",
    icon: "/assets/digital-icon.svg",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen bg-gray-50 dark:bg-slate-900">
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-dark dark:text-white">
            Our Services
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <img src={service.icon} alt={service.title} className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-primary">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
