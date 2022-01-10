import "./IssueDetails.css";

const IssueDetails = (props: any) => {
  const { issue } = props;
  return (
    <div>
      <p className="issue-header">
        <strong>{issue?.author?.login}</strong> opened this issue on{" "}
        {issue.createdAt}
      </p>
      <h3>
        {issue?.number} {issue.title}
      </h3>
      <div className="issue-body">{issue.body}</div>
    </div>
  );
};

export default IssueDetails;
