import React, { useState, useEffect, useRef, useMemo } from "react";

export const Fibonacci = () => {
  const [input, SetInput] = useState(null);
  const $input = useRef(null);
  const inputText = Number(input);
  console.log("inputText: ", inputText);
  const result = useMemo(() => calculateNumber(inputText), [inputText]);

  function calculateNumber(next = 0, limit = 10000000000) {
    console.log("next: ", next);
    const input = next
    if (!next) return 0;
    console.log("****");
    // console.time("fibo");
    while (next < limit) {
      next++;
    }
    // console.timeEnd("fibo");
    switch (input) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      default:
        return 8;
    }
  }

  function handleChange(event) {
    if (
      !event.target.value ||
      isNaN(event.target.value) ||
      event.target.value == 0
    )
      return 0;
    SetInput(Number(event.target.value));
  }

  function handleClick() {
    calculateNumber(Number(event.target.value));
  }

  useEffect(() => {
    console.log("+++++++++++++++++");
    $input.current.focus();
  }, []);

  return (
    <div className="cover">
      <div className="search">
        <input type="text" ref={$input} onChange={handleChange} />
        <button onClick={handleClick}>Calculate</button>
      </div>
      <div className="result">{result}</div>
    </div>
  );
};
