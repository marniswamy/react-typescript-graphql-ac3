import ReactDOM from "react-dom";
import Error from "./Error";

it("render the Error without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Error />, div);
});
