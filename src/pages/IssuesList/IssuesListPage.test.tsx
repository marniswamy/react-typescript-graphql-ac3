import React from "react";
import { render, screen } from "@testing-library/react";
import IssuesListPage from "./IssuesListPage";

test("renders IssuesList component", () => {
  render(<IssuesListPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
