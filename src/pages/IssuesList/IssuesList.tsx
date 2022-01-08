import React from "react";
import Loader from "../../components/Loader/Loader";
import "./issuesList.css";

const IssuesList = () => {
  return (
    <div className="issues-container">
      <h1>List of React Repository Issues</h1>
      <div className="issues-list">
        <ul>
          <li>issues 1</li>
          <li>issues 2</li>
        </ul>
      </div>
    </div>
  );
};

export default IssuesList;
