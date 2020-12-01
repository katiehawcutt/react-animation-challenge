import "./App.css";
import React from "react";
import Cocktail from "../Cocktail/index";
import Pint from "../../components/Pint/index";
import Face from "../Face";

function App() {
  return (
    <div>
      <Face />
      <Cocktail />
      <Pint />
      <Pint />
      <Pint />
    </div>
  );
}

export default App;
