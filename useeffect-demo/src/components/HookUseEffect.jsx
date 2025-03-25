import { useEffect, useState } from "react";
import FetchGhibli from "./FetchGhibli"


/*
    useEffect
    Syntax:
        useEffect(() => {
            
        }, [])

        The second argument [], is optional 
        - If provided, the callback will execute on initial mount of component
        - If dependencies are provided, will execute on initial mount, AND if any of the values change of our dependencies
*/

const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  //? Do some type of action on initial mount of component
  //   useEffect(() => {
  //     console.log("Shown when component mounts");

  //     // ? Do some type of action when component unmounts
  //     return () => console.log("Shown when component unmounts");
  //   }, []);

  //? Do some type of action when ANY state changes in component, and mounts

  //   useEffect(()=> {
  //     console.log("Shown when ANY state changes");
  //   })

  //? Do some type of action based on something specific changing in the component
  //   useEffect(()=> {
  //     console.log("Shown when component mounts OR count was changed");
  //   },[count])

  //! Example of setTimeout in useEffect:
  //! Beware of infinite loops!!  Do not set state within a useEffect that does not have a dep array []
  //   useEffect(() => {
  //     console.log("I am rendering");
  //     // setCount((prev) => prev + 1)
  //     // setInterval(setCount(prev => prev + 1 ), 1000)
  //   })

  //! Dependencies should NOT be set within
  //   useEffect(() => {
  //     // let interval = setInterval(() => setCount(prev => prev + 1), 1000)
  //     setCount(prev => prev+1)
  //   },[count]);

  useEffect(() => {
    console.log("I am rendering");
    let interval = setInterval(() => setCount(prev => prev + 1), 1000)

    return () => clearInterval(interval)
  }, []);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>


      <div>
        {/* fetch ghibli component here */}
        <FetchGhibli />
      </div>
    </div>
  );
};

export default HookUseEffect;
