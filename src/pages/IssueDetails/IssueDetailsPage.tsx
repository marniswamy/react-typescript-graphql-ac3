import React from "react";
import "./IssueDetailsPage.css";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ISSUE_DETAILS } from "../../queries/graphql";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import IssueDetails from "../../components/IssueDetails/IssueDetails";

interface IssueDetailsPageProps {}

/**
 * IssueDetailsPage used to render the selected issue along with the
 * comments section. We receive issue number from the parameter
 * from useParams method.
 *
 * @returns the component
 */
const IssueDetailsPage: React.FC<IssueDetailsPageProps> = () => {
  const { number } = useParams();
  const { loading, error, data } = useQuery(ISSUE_DETAILS, {
    variables: {
      number: Number(number),
    },
  });

  /**
   * In case of error response from useQuery we show the error component
   */
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
