import "./IssueDetails.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Comments from "../Comments/Comments";
import { formatDateHelper } from "../../helpers/dateHelper";

const IssueDetails = (props: any) => {
  const { issue } = props;
  return (
    <div>
      <p className="issue-header">
        <span
          className={`state ${issue?.state === "OPEN" ? "open" : "closed"}`}
        >
          {issue.state}
        </span>
        <strong>{issue?.author?.login}</strong> opened this issue on{" "}
        {formatDateHelper(issue.createdAt)}
      </p>
      <h3>
        {issue?.number} {issue?.title}
      </h3>
      <ReactMarkdown
        children={issue.body}
        remarkPlugins={[remarkGfm]}
      ></ReactMarkdown>
      <Comments comments={issue.comments} />
    </div>
  );
};

export default IssueDetails;
