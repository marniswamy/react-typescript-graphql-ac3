import React from "react";
import { render, screen } from "@testing-library/react";
import IssuesList from "./IssuesList";

test("renders IssuesList component", () => {
  render(<IssuesList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
