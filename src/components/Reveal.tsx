import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Reveal({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      variants={ {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      } }
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true } }
      transition={ { duration: 0.5, delay: 0.5 } }
    >
      {children}
    </motion.div>
  );
}
