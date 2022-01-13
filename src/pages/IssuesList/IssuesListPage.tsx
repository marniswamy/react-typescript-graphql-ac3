import "./IssuesListPage.css";
import { Fragment, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { ISSUES_LIST } from "../../queries/graphql";
import IssuesList from "../../components/IssuesList/IssuesList";
import Count from "../../components/Count/Count";
import Message from "../../components/Message/Message";

const IssuesListPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("OPEN");
  const [getSearchResults, { loading, error, data }] = useLazyQuery(
    ISSUES_LIST,
    {
      variables: {
        state: status,
      },
    }
  );

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="card-wrapper">
      <h1>React Repository Issues</h1>
      <div className="search-section">
        <label>Filter By</label>
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="OPEN">OPEN</option>
          <option value="CLOSED">CLOSED</option>
        </select>
        <input
          type="text"
          placeholder="Enter search query"
          onChange={(event) => setSearchQuery(event?.target.value)}
        />
        <button onClick={() => getSearchResults()}>Search</button>
      </div>
      <div className="card-content">
        {loading && <Loader />}
        {data && (
          <Fragment>
            <Count totalCount={data?.repository?.issues?.totalCount} />
            <IssuesList issues={data.repository?.issues?.nodes} />
          </Fragment>
        )}
        {!loading && !data && <Message />}
      </div>
    </div>
  );
};

export default IssuesListPage;
