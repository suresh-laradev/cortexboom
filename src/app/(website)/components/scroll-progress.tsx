"use client";

import { motion, useScroll, useSpring } from "motion/react";

const ScrollProgress = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          originX: 0,
          backgroundColor: "#a3a85e",
        }}
      />
      {children}
    </>
  );
};

export default ScrollProgress;
