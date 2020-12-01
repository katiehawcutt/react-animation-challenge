import React from "react";
import "./pint.css";
import { motion } from "framer-motion";

function Pint() {
  return <motion.div drag className="beer-container"></motion.div>;
}

export default Pint;
