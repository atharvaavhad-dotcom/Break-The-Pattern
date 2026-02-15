import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-500 overflow-hidden">
      
      {/* Optional video background */}
      {/* Uncomment if you have a hero video */}
      {/* 
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>
      */}

      {/* Animated shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-72 h-72 bg-white/10 rounded-full top-[-10%] left-[-10%]"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-white/20 rounded-full bottom-[-20%] right-[-20%]"
          animate={{ x: [0, -150, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
          Transforming Businesses with <span className="text-yellow-400">AI</span>, <span className="text-green-400">Cloud</span>, and <span className="text-purple-400">Digital</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          We deliver innovative technology solutions that accelerate business growth and create a digital-first future.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded hover:opacity-90 transition">
            Get Started
          </button>
          <button className="px-8 py-3 border border-white text-white font-semibold rounded hover:bg-white hover:text-blue-700 transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
}
