import { motion } from 'framer-motion';
import './Loader.css';

export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: 'none' }}
      transition={{ delay: 1.15, duration: 0.55, ease: 'easeInOut' }}
    >
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.65 }}>
        Amaya Chathumali<span>.</span>
      </motion.p>
      <span className="loader-line" />
    </motion.div>
  );
}
