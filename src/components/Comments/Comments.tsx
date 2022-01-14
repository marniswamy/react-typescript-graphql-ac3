import "./Comments.css";

export interface Comments {
  comments: {
    totalCount: number;
    nodes: [Comment];
  };
}
export interface Comment {
  id: string;
  authoe: {
    login: string;
  };
  body: string;
  updatedAt: string;
  createdAt: string;
}

const Comments: React.FC<Comments> = (props: Comments) => {
  const { comments } = props;
  if (!comments?.totalCount) {
    return null;
  }
  return (
    <div>
      <h4>Comments ({comments.totalCount})</h4>
      {comments?.nodes.map((comment: any) => (
        <div className="comment-section" key={comment.id}>
          <div className="title-head">
            <strong>{comment.author.login}</strong> commented on{" "}
            {comment.createdAt} and last updated on {comment.updatedAt}
          </div>
          <p className="comment-body">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
