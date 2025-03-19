import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Grapes"];

  function myMapper() {
    return fruits.map((fruit) => {
      return <h1>{fruit}</h1>;
    });
  }

  return (
    <div>
      {/* Can call functions within {}, as long as they are returning valid JSX */}
      {/* {myMapper()} */}

      {/* {fruits.map((fruit) => {
        return <h1>{fruit}</h1>
    })} */}

    <ul>
      {fruits.map((fruit, index) => <li key={index} >{fruit} index: {index}</li>)}
    </ul>

    </div>
  );
};

export default FruitList;
