import { motion } from 'framer-motion';

export function Reveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      key="motion"
      variants={ {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      } }
      initial="hidden"
      viewport={ { once: true } }
      whileInView="visible"
      transition={ { duration: 0.5, delay: 0.5 } }
    >
      {children}
    </motion.div>
  );
}
