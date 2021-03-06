import "./IssuesListPage.css";
import { Fragment, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { ISSUES_LIST } from "../../queries/graphql";
import IssuesList from "../../components/IssuesList/IssuesList";
import Count from "../../components/Count/Count";
import Message from "../../components/Message/Message";

interface IssuesListPageProps {}

/**
 * IssuesListPage to dispalt the list of issues list along with the input
 * filter and select component
 *
 * @returns the comppnent
 */
const IssuesListPage: React.FC<IssuesListPageProps> = () => {
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

  /**
   * In case of error response we show the error component
   */
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
        <button data-testid="search_button" onClick={() => getSearchResults()}>
          Search
        </button>
      </div>
      <div className="card-content">
        {loading && <Loader />}
        {data && (
          <Fragment>
            <Count totalCount={data?.repository?.issues?.totalCount} />
            <IssuesList
              issues={data.repository?.issues?.nodes}
              searchText={searchQuery}
            />
          </Fragment>
        )}
        {!loading && !data && <Message />}
      </div>
    </div>
  );
};

export default IssuesListPage;
