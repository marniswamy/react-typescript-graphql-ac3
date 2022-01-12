import React from "react";
import "./IssueDetailsPage.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ISSUE_DETAILS } from "../../queries/graphql";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import IssueDetails from "../../components/IssueDetails/IssueDetails";

const IssueDetailsPage = () => {
  const { number } = useParams();
  const { loading, error, data } = useQuery(ISSUE_DETAILS, {
    variables: {
      number: Number(number),
    },
  });

  if (error) {
    return <Error error={error} />;
  }
  return (
    <div className="card-wrapper">
      <h1>Issue Details</h1>
      <div className="card-content">
        <Link className="back-button" to="/issuesList">
          Go Back
        </Link>
        {loading && <Loader />}
        {data && <IssueDetails issue={data?.repository?.issue} />}
      </div>
    </div>
  );
};

export default IssueDetailsPage;
