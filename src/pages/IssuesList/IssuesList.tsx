import React from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import "./issuesList.css";
import { testData } from "../../dummyData";

const IssuesList = () => {
  return (
    <div className="card-wrapper">
      <h1>List of React Repository Issues</h1>
      <div className="search-section">
        <input type="text" placeholder="Enter search query" />
      </div>
      <div className="card-content">
        {testData.map((item) => (
          <div className="list-item" key={item.id}>
            <h3>
              <Link to={`/issuesList/${item.id}`}>{item.title}</Link>
            </h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesList;
