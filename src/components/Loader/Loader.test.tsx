import ReactDOM from "react-dom";
import Loader from "./Loader";

it("render the Loader without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Loader />, div);
});
