// sfc - Stateless Function Component
// imrse - Import React, useState, useEffect
import React, { useState, useEffect } from "react";

export const Cronometer = () => {
  console.log("Entry");
  const [showDate, setShowDate] = useState("00:00:00");

  function updateDate() {
    const currentDate = new Date();
    const showDate = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    console.log("setShowDate: ", showDate);
    setShowDate(showDate);
  }

  useEffect(
    () => {
      console.log("updateDate");
        const a = setTimeout(() => {
        updateDate();
      }, 1000);
      return () => {
          clearInterval(a)
          console.log("Exit")
      }
    },
    [showDate]
  );

  return (
    <div>
      <div className="container--clock">{showDate}</div>
      <div className="container-text">
        <button>Stop</button>
        <button>Start</button>
      </div>
    </div>
  );
};
