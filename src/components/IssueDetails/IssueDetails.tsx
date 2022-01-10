import React, { Fragment } from "react";
import "./IssueDetails.css";

const IssueDetails = (props: any) => {
  const { issue } = props;
  return (
    <Fragment>
      <div>{issue.title}</div>
    </Fragment>
  );
};

export default IssueDetails;
