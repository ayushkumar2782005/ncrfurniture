import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-5 bg-gray-50">
      
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold"
      >
        Beautiful Interiors <br />
        <span className="text-red-500">Made Simple</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-5 text-gray-600 max-w-xl"
      >
        Transform your home with modern designs.
      </motion.p>

    </section>
  );
}

export default Hero;