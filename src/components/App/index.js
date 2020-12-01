import "./App.css";
import React from "react";
import Cocktail from "../Cocktail/index";
import Pint from "../../components/Pint/index";

function App() {
  return (
    <div>
      <Cocktail />
      <Pint />
      <Pint />
      <Pint />
    </div>
  );
}

export default App;
