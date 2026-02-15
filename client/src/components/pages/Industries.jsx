import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import PrankModal from "../PrankModal";

const industries = [
  { name: "Banking & Finance", icon: "/assets/banking.svg" },
  { name: "Healthcare", icon: "/assets/healthcare.svg" },
  { name: "Retail", icon: "/assets/retail.svg" },
  { name: "Telecom", icon: "/assets/telecom.svg" },
  { name: "Manufacturing", icon: "/assets/manufacturing.svg" },
  { name: "Energy", icon: "/assets/energy.svg" },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const handleCardClick = (industryName) => {
    setSelectedIndustry(industryName);
  };

  const closeModal = () => {
    setSelectedIndustry(null);
  };

  return (
    <>
      <Navbar />
      <main className="pt-28 min-h-screen bg-white dark:bg-slate-800">
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-dark dark:text-white">
            Industries We Serve
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 dark:bg-slate-700 p-8 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                onClick={() => handleCardClick(ind.name)}
              >
                <img src={ind.icon} alt={ind.name} className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-primary">{ind.name}</h2>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <PrankModal industry={selectedIndustry} onClose={closeModal} />
    </>
  );
}
