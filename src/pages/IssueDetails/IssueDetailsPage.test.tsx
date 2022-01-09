import React from "react";
import { render, screen } from "@testing-library/react";
import IssueDetailsPage from "./IssueDetailsPage";


test("renders IssueDetails component", () => {
  render(<IssueDetailsPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
