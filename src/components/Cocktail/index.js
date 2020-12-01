import React, { useState } from "react";
import "./cocktail.css";
import { motion } from "framer-motion";

const variants = {
  tipping: {
    y: [0, -150, -150, -150, 0],
    rotate: [0, 0, -90, -90, 0],
  },
  notTipping: { y: 0, rotate: 0 },
};

function Cocktail() {
  const [isTipping, setIsTipping] = useState(false);

  return (
    <motion.div
      className="glass-container"
      animate={isTipping ? "tipping" : "notTipping"}
      variants={variants}
      transition={{ duration: 2 }}
      onClick={() => setIsTipping(!isTipping)}
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

// import { motion } from "framer-motion";

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: "-100%" },
// };

// export const MyComponent = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
//       <Toggle onClick={() => setIsOpen(!isOpen)} />
//       <Items />
//     </motion.nav>
//   );
// };
