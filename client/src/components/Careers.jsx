import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Careers() {
  return (
    <section className="py-20 bg-blue-700 text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our Team
        </h2>
        <p className="mb-8 text-lg md:text-xl">
          Explore exciting career opportunities and shape the future with us.
        </p>
        <Link
          to="/careers"
          className="px-8 py-3 bg-white text-blue-700 font-semibold rounded hover:opacity-90 transition"
        >
          View Open Positions
        </Link>
      </motion.div>
    </section>
  );
}
