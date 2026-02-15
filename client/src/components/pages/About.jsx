import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import PrankInitialModal from "../PrankInitialModal";
import TechQuizModal from "../TechQuizModal";

const team = [
  { name: "Anand Bedre", role: "CEO & Founder", photo: "/assets/team1.jpg" },
  { name: "Jane Doe", role: "Chief Technology Officer", photo: "/assets/team2.jpg" },
  { name: "John Smith", role: "Chief Operations Officer", photo: "/assets/team3.jpg" },
];

export default function About() {
  const [showInitialModal, setShowInitialModal] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);

  const handleCeoClick = () => setShowInitialModal(true);

  const handleYes = () => {
    setShowInitialModal(false);
    setShowQuizModal(true);
  };

  const handleNo = () => {
    setShowInitialModal(false);
    setShowNoMessage(true);
    setTimeout(() => setShowNoMessage(false), 3000);
  };

  const closeModals = () => {
    setShowInitialModal(false);
    setShowQuizModal(false);
  };

  return (
    <>
      <Navbar />

      <main className="pt-28 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 
                       dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 
                       transition-colors duration-500">

        {/* HERO SECTION */}
        <section className="relative max-w-7xl mx-auto px-6 py-24 text-center">
          
          {/* Floating gradient blobs */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-400/30 dark:bg-purple-600/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute top-20 -right-10 w-72 h-72 bg-blue-400/30 dark:bg-blue-600/20 blur-3xl rounded-full animate-pulse"></div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative text-4xl md:text-6xl font-extrabold 
                       bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                       bg-clip-text text-transparent mb-6"
          >
            Building The Future With Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative text-lg md:text-xl text-slate-600 dark:text-slate-300 
                       max-w-3xl mx-auto leading-relaxed"
          >
            At Bedre’s Company, we design intelligent technology solutions that
            empower businesses to grow, scale, and dominate in a digital-first world.
          </motion.p>
        </section>

        {/* JOURNEY SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 
                         text-slate-800 dark:text-white">
            Our Journey 🚀
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { year: "2018", text: "Founded Bedre's Company" },
              { year: "2020", text: "Launched AI & Cloud Services" },
              { year: "2025", text: "Expanded Globally" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 
                           border border-white/20 dark:border-slate-700 
                           rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                           hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                  {item.year}
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 
                         text-slate-800 dark:text-white">
            Meet Our Leadership 💎
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                onClick={member.name === "Anand Bedre" ? handleCeoClick : undefined}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`relative cursor-pointer group 
                           backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 
                           border border-white/20 dark:border-slate-700 
                           rounded-3xl p-8 shadow-xl 
                           transition-all duration-500`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r 
                                from-indigo-500 via-purple-500 to-pink-500 
                                opacity-0 group-hover:opacity-20 blur-xl 
                                transition duration-500"></div>

                <img
                  src={member.photo}
                  alt={member.name}
                  className="relative w-36 h-36 mx-auto rounded-full 
                             border-4 border-indigo-500/40 
                             group-hover:scale-110 transition duration-500"
                />

                <h3 className="relative mt-6 text-xl font-semibold 
                               text-slate-800 dark:text-white">
                  {member.name}
                </h3>

                <p className="relative text-slate-600 dark:text-slate-400">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* PRANK MODALS */}
      {showInitialModal && (
        <PrankInitialModal
          onYes={handleYes}
          onNo={handleNo}
          onClose={closeModals}
        />
      )}

      {showQuizModal && <TechQuizModal onClose={closeModals} />}

      {showNoMessage && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 
                     bg-gradient-to-r from-indigo-600 to-purple-600 
                     text-white px-6 py-3 rounded-full shadow-2xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Theek hai, bina password ke bhi zindagi chalti hai 😄
        </motion.div>
      )}
    </>
  );
}
