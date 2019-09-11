import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement("p", {}, "Find your new best friend"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Maltese"
    }),
    React.createElement(Pet, {
      name: "Jackpot",
      animal: "Bird",
      breed: "Parrot"
    }),
    React.createElement(Pet, {
      name: "Jackpot",
      animal: "Bird",
      breed: "Parrot"
    }),
    React.createElement(Pet, {
      name: "Samantha",
      animal: "Cat",
      breed: "Mixed"
    })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
