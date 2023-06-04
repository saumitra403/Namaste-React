import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{"id": "heading"},"Namaste React")

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - HTML like syntax

//JSX => Converted to React.createElement - JS Object => HTMLElement(render)

const jsxHeading = (<h1 id="heading">
            Namaste React using JSX</h1>);

root.render(jsxHeading);