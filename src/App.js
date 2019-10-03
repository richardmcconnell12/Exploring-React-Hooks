import React, { useState } from "react";
import './App.css';

function Button() {
  const [buttonText, setButtonText] = useState("Click me, please");

  function handleClick() {
    return setButtonText("Thank you, button clicked!");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
}

export default Button;
