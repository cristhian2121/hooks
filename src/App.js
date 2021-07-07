import React, { useState } from "react";
import "./App.css";

import { CountNumber, ListPets } from "./components";

function App() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Click</button>
      {/* State */}
      {/* <Cronometer />  */}
      {/* <ListJum /> */}
      {/* <Fibonacci /> */}
      {/* Effect */}
      {toggle ? <CountNumber></CountNumber> : <ListPets></ListPets>}
    </div>
  );
}

export default App;
