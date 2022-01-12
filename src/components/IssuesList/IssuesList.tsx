import { Fragment } from "react";
import { Link } from "react-router-dom";
import { formatDateHelper } from "../../helpers/dateHelper";
import "./IssuesList.css";

const IssuesList = (props: any) => {
  const { issues } = props;
  return (
    <Fragment>
      {issues.map((issue: any) => (
        <div className="list-item" key={issue.id}>
          <h3>
            <Link
              title="Click here for more details"
              to={`/issuesList/${issue.number}`}
            >
              {issue.title}
            </Link>
          </h3>
          <p>
            <span
              className={`state ${issue?.state === "OPEN" ? "open" : "closed"}`}
            >
              {issue.state}
            </span>
            Issue created at {formatDateHelper(issue.createdAt)} by{" "}
            <b>{issue.author.login}</b>. Last updated at{" "}
            {formatDateHelper(issue.updatedAt)}
          </p>
        </div>
      ))}
    </Fragment>
  );
};

export default IssuesList;
