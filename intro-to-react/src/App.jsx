// Importing CSS to target elements found in App.jsx. 
import "./App.css";
// Importing our component so it can be used/rendered in App.jsx
import HelloWorld from "./HelloWorld";

// App.jsx is our main component, the parent, the start of the component tree
function App() {
  // You can only return 1 thing in a function, in react you can use Fragment tags to wrap 1 or multiple elements
  return (
    <>
    {/* Render out component here, using JSX syntax */}
      <HelloWorld />
    </>
  );
}

export default App;
