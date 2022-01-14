import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import Error from "./Error";
import IssuesListPage from "../../pages/IssuesList/IssuesListPage";

test("render the Error without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Error />, div);
});
