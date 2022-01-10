import { Link } from "react-router-dom";
import "./Error.css";

const Error = (props: any) => {
  const { error } = props;
  return (
    <div className="error-wrapper">
      <h2>
        Something went wrong <Link to="/">Try again</Link>
      </h2>
      <h4 className="error">Message: {error?.message}</h4>
    </div>
  );
};

export default Error;
