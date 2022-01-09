import React from "react";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { Link } from "react-router-dom";
import "./issuesList.css";
import { useQuery, gql } from "@apollo/client";

const ISSUES_LIST = gql`
  query {
    repository(owner: "facebook", name: "react") {
      issues(
        states: OPEN
        first: 10
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          title
          body
          id
        }
        totalCount
      }
    }
  }
`;

const IssuesList = () => {
  const { loading, error, data } = useQuery(ISSUES_LIST);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="card-wrapper">
      <h1>List of React Repository Issues</h1>
      <div className="search-section">
        <input type="text" placeholder="Enter search query" />
      </div>
      <div className="card-content">
        <div className="count">
          Issues count: {data?.repository?.issues?.totalCount}
        </div>
        {data.repository?.issues?.nodes.map((issue: any) => (
          <div className="list-item" key={issue.id}>
            <h3>
              <Link to={`/issuesList/${issue.id}`}>{issue.title}</Link>
            </h3>
            <p>{issue.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesList;
