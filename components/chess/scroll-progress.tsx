"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { GOLD, GOLD_LIGHT } from "@/lib/chess-data";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[90] h-0.5"
      style={{
        background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT})`,
        transformOrigin: "0%",
        scaleX,
      }}
    />
  );
}
