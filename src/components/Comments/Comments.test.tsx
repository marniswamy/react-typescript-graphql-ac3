import React from "react";
import { render, screen } from "@testing-library/react";
import Comments from "./Comments";

test("renders IssueDetails component", () => {
  render(<Comments />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
