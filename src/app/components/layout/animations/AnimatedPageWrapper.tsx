import { motion } from "framer-motion";
import { IChildren } from "../../../../types/common/types";

const animations = {
  initial: { opacity: 0, y: 500 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -500 },
};

const AnimatedPageWrapper = ({ children }: IChildren) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
