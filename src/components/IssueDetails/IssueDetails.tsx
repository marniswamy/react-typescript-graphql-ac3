import "./IssueDetails.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <ReactMarkdown
        children={issue.body}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
    </div>
  );
};

export default IssueDetails;
