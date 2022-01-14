export default interface Comments {
  nodes: [];
  totalCount: number;
}

export default interface CommentsProps {
  comments: Comments;
}

export default interface Comment {
  id: string;
  author: {
    login: string;
  };
  createdAt: string;
  updatedAt: string;
  body: string;
}
