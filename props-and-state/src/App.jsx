import "./App.css";
import ParentComponent from "./components/ParentComponent";
import FruitList from "./components/FruitList";
import Counter from "./components/Counter";
import SimpleForm from "./components/SimpleForm";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <ParentComponent />

      <FruitList />

      <Counter />

      {toggle ? <OtherComponent /> : <SimpleForm />}

      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
}

function OtherComponent() {
  return <p>Some other component</p>
}

// You do not need separate files for each component

export default App;
