import React, { useState } from "react";
import "./App.css";

import { Fibonacci } from "./components";

function App() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Click</button>
      {/* <Cronometer /> */}
      {/* <ListJum /> */}
      <Fibonacci />
      {/* {toggle ? <CountNumber></CountNumber> : <ListPets></ListPets>} */}
    </div>
  );
}

export default App;
