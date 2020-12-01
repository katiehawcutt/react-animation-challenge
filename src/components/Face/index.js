import React, { useState } from "react";
import "./face.css";
import { motion } from "framer-motion";
import Tao from "./tao.png";
import Jon from "./jon.png";
import Stefan from "./stefan.png";
import Zaid from "./zaid.png";

function Face() {
  const [face, setFace] = useState(Tao);

  function randomise() {
    const facesArray = [Jon, Tao, Stefan, Zaid];
    let randomIndex = Math.floor(Math.random() * facesArray.length);
    console.log(randomIndex);
    setFace(facesArray[randomIndex]);
    console.log(face);
  }

  return (
    <motion.div
      className="face"
      animate={{ scale: [1, 1.5, 1], rotate: [0, 10, 0, -10, 0] }}
      transition={{ duration: 2, loop: Infinity }}
    >
      <img alt="bootcamper face" src={face} onClick={randomise}></img>
    </motion.div>
  );
}

export default Face;
