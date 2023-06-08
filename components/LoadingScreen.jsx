import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 6, duration: 0.5, type: "tween" }}
      className="absolute w-screen h-screen bg-primary-900 z-[60] pointer-events-none"
    ></motion.div>
  );
};

export default LoadingScreen;
