import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import ReactDOM from "react-dom";

test("renders learn react link", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
