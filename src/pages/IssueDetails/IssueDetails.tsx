import React from "react";
import "./IssueDetails.css";
import { Link, useParams } from "react-router-dom";

const IssueDetails = () => {
  const { id } = useParams();
  return (
    <div className="card-wrapper">
      <h1>Issue Details</h1>
      <div className="card-content">
        <Link className="back-button" to="/issuesList">
          Go Back
        </Link>
        <h3>Issue id: {id}</h3>
      </div>
    </div>
  );
};

export default IssueDetails;
