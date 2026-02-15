import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import InsightsTrapModal from "../InsightsTrapModal";

const blogs = [
  {
    title: "AI in Healthcare",
    desc: "Predictive analytics revolutionizing patient care.",
    image: "/assets/blog1.jpg",
  },
  {
    title: "Cloud Migration Strategies",
    desc: "How companies move to cloud efficiently.",
    image: "/assets/blog2.jpg",
  },
  {
    title: "Digital Transformation Trends",
    desc: "Empowering businesses with agile solutions.",
    image: "/assets/blog3.jpg",
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
      <Navbar />
      <main className="pt-28 bg-gray-50 dark:bg-slate-900 min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-dark dark:text-white text-center">
            Insights & Articles
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div
                key={idx}
                className="block bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg overflow-hidden transition cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                onClick={() => handleCardClick(blog.title)}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{blog.desc}</p>
                  <span className="mt-4 inline-block text-blue-600 hover:underline">
                    Read More →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {trapTopic && <InsightsTrapModal topic={trapTopic} onClose={closeModal} />}
    </>
  );
}
