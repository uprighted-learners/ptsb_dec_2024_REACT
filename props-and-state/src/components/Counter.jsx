// Import hook from react, useState, which will allow us to manage state
import { useState } from "react";

const Counter = () => {
  // Anytime state is updated, the component in which it originates is rerendered
  
  // first item in the array is a variable that represents our state's value
  // second item in the array is a function to update our state's value



  // const [state, functionToUpdateState] = useState("Default Value")

  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      {/* Adding onclick event to button */}
      <button onClick={() => {
        setCount(count + 1)
      }}>Increase Count</button>
    </div>
  );
};

export default Counter;
