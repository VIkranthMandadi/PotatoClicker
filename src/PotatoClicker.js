// src/CookieClicker.js

import React, { useState } from "react";
import "./PotatoClicker.css";

const PotatoClicker = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="potato-clicker">
      <h1>Potato Clicker</h1>
      <button onClick={handleClick} className="potato-button">
        🥔
      </button>
      <p>Potatos: {count}</p>
    </div>
  );
};

export default PotatoClicker;
