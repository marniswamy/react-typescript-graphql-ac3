import "./IssuesListPage.css";
import { useQuery } from "@apollo/client";

import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { ISSUES_LIST } from "../../queries/graphql";
import IssuesList from "../../components/IssuesList/IssuesList";
import Count from "../../components/Count/Count";

const IssuesListPage = () => {
  const { loading, error, data } = useQuery(ISSUES_LIST);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="card-wrapper">
      <h1>List of React Repository Issues</h1>
      <div className="search-section">
        <input type="text" placeholder="Enter search query" />
      </div>
      <div className="card-content">
        <Count totalCount={data?.repository?.issues?.totalCount} />
        <IssuesList issues={data.repository?.issues?.nodes} />
      </div>
    </div>
  );
};

export default IssuesListPage;
