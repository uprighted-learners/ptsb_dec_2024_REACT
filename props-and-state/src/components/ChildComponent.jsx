function ChildComponent(props) {
  return (
    // Adding inline styling, using double set of {}, and css properties are camelcased
    <div style={{backgroundColor: props.bColor }}>
      <p>Hello from child component</p>

      {/* Anytime we wish to access pure JS syntax in the return of a React component, use {} */}

      <p>{props.message}</p>

      <h4>{props.anotherProp}</h4>
    </div>
  );
}

export default ChildComponent;
