import React from "react";
import ReactDOM from "react-dom/client";

//the second empty object are the attributes of a tag
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaste React"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im an h1 tag"),
    React.createElement("h2", {}, "Im an h2 tag"),
  ]),
]); //ReactElement (Object) => HTML(Browser Understands)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
