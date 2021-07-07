import React, { useState, useEffect } from "react";
import "./style.css";

export const CountNumber = () => {
  console.log("Init count");
  const [count, updateCount] = useState(0);
  const [count2, updateCount2] = useState(1);
  const [tip, setTip] = useState("tip");
  let countAux = 0;

  function update() {
    console.log("* 1");
    updateCount((prev) => prev + 1);
    updateCount2((prev) => prev + 1);
    // countAux = countAux + 1;
    otherIcrement();
  }

  function otherIcrement() {
    console.log("* 2");
    updateCount((prev) => prev + 1);
    updateCount2((prev) => prev + 1);
    otherIcrement2();
  }

  function otherIcrement2() {
    console.log("* 3");
    updateCount((prev) => prev + 1);
  }

  const updateTip = () => {
    const text = tip === "tip" ? "boom" : "tip";
    setTip(text);
  };

  useEffect(() => {
    console.log('Use 2');
    setTip(tip === "tip" ? "boom" : "tip");
    setTimeout(() => {
      updateCount(prev => prev + 1);
      updateCount2(count + 1);
    }, 5000);
  }, []);

  useEffect(() => {
    console.log('Use 1');
    updateCount(count + 1);
  }, []);

  return (
    <div className="container">
      <p className="container--text">Contador de clicks</p>
      <div className="container--button">
        <button onClick={update}>Click</button>
        <button onClick={updateTip}>{tip}</button>
      </div>
      <p className="container-count">En total {countAux}</p>
      <p className="container--total">
        {count}- {count2}
      </p>
    </div>
  );
};
