import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const jobs = [
  { title: "AI Engineer", category: "AI", location: "Bangalore", link: "/apply/ai-engineer" },
  { title: "Cloud Architect", category: "Cloud", location: "Mumbai", link: "/apply/cloud-architect" },
  { title: "Frontend Developer", category: "Digital", location: "Pune", link: "/apply/frontend-dev" },

  // ✅ Dark-mode-only job
  { title: "Backend Developer", category: "Digital", location: "Remote", link: "/apply/backend-dev" },
];

const categories = ["All", "AI", "Cloud", "Digital"];

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const filteredJobs =
    filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <>
      <Navbar />
      <main className="pt-28 bg-gray-50 dark:bg-slate-900 min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark dark:text-white text-center">
            Join Our Team
          </h1>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded ${
                  filter === cat
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300"
                } hover:opacity-90 transition`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredJobs.map((job, idx) => {
              const isBackend = job.title === "Backend Developer";

              return (
                <motion.div
                  key={idx}
                  className={`
                    rounded-xl p-6 shadow hover:shadow-lg transition
                    ${isBackend
                      ? "hidden dark:block bg-white"
                      : "bg-white dark:bg-slate-800"}
                  `}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                >
                  {/* Job Title */}
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isBackend ? "text-black" : "text-primary dark:text-white"
                    }`}
                  >
                    {job.title}
                  </h3>

                  {/* Location */}
                  <p
                    className={
                      isBackend
                        ? "text-gray-700"
                        : "text-gray-600 dark:text-gray-300"
                    }
                  >
                    {job.location}
                  </p>

                  {/* Category */}
                  <p
                    className={
                      isBackend
                        ? "mt-2 text-sm text-gray-600"
                        : "mt-2 text-sm text-gray-500 dark:text-gray-400"
                    }
                  >
                    {job.category}
                  </p>

                  {/* Apply Button */}
                  <a
                    href={job.link}
                    className="mt-4 inline-block px-4 py-2 bg-blue-700 text-white rounded hover:opacity-90 transition"
                  >
                    Apply
                  </a>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
