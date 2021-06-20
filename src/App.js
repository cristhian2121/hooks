import React, { useState } from "react";
import "./App.css";

import { ListJum } from "./components";

function App() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Click</button>
      {/* <Cronometer /> */}
      <ListJum />
      {/* {toggle ? <CountNumber></CountNumber> : <ListPets></ListPets>} */}
    </div>
  );
}

export default App;
