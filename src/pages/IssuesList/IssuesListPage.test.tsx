import React from "react";
import { render, screen } from "@testing-library/react";
import IssuesListPage from "./IssuesListPage";

test("renders IssuesList component", () => {
  render(<IssuesListPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders a message", () => {
  const { container, getByText } = render(<IssuesListPage />);
  expect(getByText("React Repository Issues")).toBeInTheDocument();
});
