import ReactDOM from "react-dom";
import Message from "./Message";

it("render the Message without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Message />, div);
});
