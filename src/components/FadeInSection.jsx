import { motion } from "framer-motion";

function FadeInSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }} 
      className="w-full flex justify-center items-center"
    >
      {children}
    </motion.div>
  );
}
export default FadeInSection;