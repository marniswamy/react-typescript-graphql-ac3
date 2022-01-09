import { Fragment } from "react";
import { Link } from "react-router-dom";
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
              to={`/issuesList/${issue.id}`}
            >
              {issue.title}
            </Link>
          </h3>
          <p>
            Issue created at {issue.createdAt} by <b>{issue.author.login}</b>.
            Last updated at {issue.updatedAt}
          </p>
        </div>
      ))}
    </Fragment>
  );
};

export default IssuesList;
