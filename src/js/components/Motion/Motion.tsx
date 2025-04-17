import React from "react";
import { motion } from "framer-motion";

type MotionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const Motion: React.FC<MotionProps> = ({
  children,
  className,
  delay = 0.0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
