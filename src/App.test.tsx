import React from "react";
import { render } from "@testing-library/react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom";
import App from "./App";
import ReactDOM from "react-dom";
import IssuesListPage from "./pages/IssuesList/IssuesListPage";
import IssueDetailsPage from "./pages/IssueDetails/IssueDetailsPage";

test("renders learn react link", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("invalid path should redirect to List Page", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/random"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(IssuesListPage)).toHaveLength(1);
});

test("should redirect to List Page if user gives issuesList", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/issuesList"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(IssuesListPage)).toHaveLength(1);
});

test("should redirect to List Details Page if user clicks on list", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/issuesList/:number"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(IssueDetailsPage)).toHaveLength(1);
});
