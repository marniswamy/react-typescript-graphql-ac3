import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-wrapper">
      <h2>
        Something went wrong <Link to="/">Try again</Link>
      </h2>
    </div>
  );
};

export default Error;
