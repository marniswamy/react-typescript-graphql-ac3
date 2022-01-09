import ReactDOM from "react-dom";
import Count from "./Count";

it("render the Count without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Count />, div);
});
