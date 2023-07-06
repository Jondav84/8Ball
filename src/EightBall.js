/** @format */

import React, { useState } from "react";
import "./EightBall.css";
const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a Question");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setColor(color);
    setMessage(msg);
  };

  return (
    <div
      className="eight-ball"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <p className="message">{message}</p>
    </div>
  );
};

export default EightBall;
