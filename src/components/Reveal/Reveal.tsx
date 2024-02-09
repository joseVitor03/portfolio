import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
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
