import React from "react";
import { render, screen } from "@testing-library/react";
import IssueDetails from "./IssueDetails";

test("renders IssueDetails component", () => {
  render(<IssueDetails />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
