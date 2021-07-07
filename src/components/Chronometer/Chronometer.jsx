// sfc - Stateless Function Component
// imrse - Import React, useState, useEffect
import React, { useState, useEffect } from "react";

export const Cronometer = () => {
  // Entry each change that any state in this case 3 times
  // console.log('Entry');
  const [showDate, setShowDate] = useState("00:00:00");
  const [count, setCount] = useState(() => {
    // Is important use params function in useState when
    // I need use a expensive function because for each call to component
    // the function render again. BUT if i use array function only call the function one time
    console.log('')
    return 0
  });
  const [count2, setCount2] = useState(1);

  function updateDate() {
    const currentDate = new Date();
    const showDate = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    setShowDate(showDate);
    setCount((prevCount) => prevCount+1)
    setCount2((prevCount) => prevCount+1)
  }

  useEffect(() => {
    console.log("Mount");
  }, []);

  useEffect(() => {
    // console.log("updateDate");
    const a = setTimeout(() => {
      updateDate();
    }, 1000);
    return () => {
      // first destroy to entry again to effect
      // console.log('exit');
      clearInterval(a);
    };
  }, [showDate]);

  return (
    <div>
      <div className="container--clock">{showDate}</div>
      <div className="container-text">
        <button>Stop {count2}</button>
        <button>Start {count}</button>
      </div>
    </div>
  );
};
