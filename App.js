import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",{"id": "heading"},"Namaste React")

//JSX - HTML like syntax

//JSX => Converted to React.createElement - JS Object => HTMLElement(render)

//JSX Element
// const heading = <h1 id="heading">Namaste React using JSX</h1>;

//React Component
//Functional Components - Javascript function that returns JSX/React Element
const element = <span>React Element</span>;

//Component Compositions

const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

//React Fragment - behaves like an empty tag. Its same as <></>
const HeadingComponent = () => {
  return (
    <>
      <div id="container">
        {title}
        {/* Babel takes care of Cross Site Scripting here */}
        {/* {Title()} Another cool way of writing jsx */}
        <h1 id="heading"> Namaste React Functional Component</h1>
      </div>
      <div id="container2"></div>
    </>
  );
};

const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(HeadingComponent); Cannot render like this

root.render(<HeadingComponent />);
