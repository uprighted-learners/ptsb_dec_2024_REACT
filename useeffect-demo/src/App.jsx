import { useState } from "react";

import "./App.css";
import HookUseEffect from "./components/HookUseEffect";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>

      {show && <HookUseEffect />}
    </>
  );
}

export default App;
