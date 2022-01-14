import React from "react";
import ReactDOM from "react-dom";
import IssueDetailsPage from "./IssueDetailsPage";

it("render the IssueDetailsPage without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IssueDetailsPage />, div);
});
