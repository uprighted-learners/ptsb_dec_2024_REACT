import ChildComponent from "./ChildComponent";

function ParentComponent() {
  return (
    <>
      <p>Hello from parent component</p>
      {/* Props are ONLY passed in one direction top-to-bottom, parent-to-child */}

      <ChildComponent
        message="Hello from props!"
        anotherProp="This is another prop!"
        bColor="rebeccapurple"
      />

      <ChildComponent
        message="blah blah"
        anotherProp="This is another prop!"
        bColor="blue"
      />

      <ChildComponent
        message="Hello from props!"
        anotherProp="This is another prop!"
        bColor="limegreen"
      />


    </>
  );
}

export default ParentComponent;
