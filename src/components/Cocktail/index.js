import React from "react";
import "./cocktail.css";
import { motion } from "framer-motion";

function Cocktail() {
  return (
    <motion.div
      className="glass-container"
      animate={{
        y: [0, -150, 0],
        rotate: [0, 0, -90, -90, 0],
      }}
    >
      <div className="glass-top"></div>
      <div className="cocktail"></div>
      <div className="cherry"></div>
      <div className="cherry-stick"></div>
      <div className="glass-stem"></div>
      <div className="glass-bottom"></div>
    </motion.div>
  );
}

export default Cocktail;
