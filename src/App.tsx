import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import IssueDetailsPage from "./pages/IssueDetails/IssueDetailsPage";
import IssuesListPage from "./pages/IssuesList/IssuesListPage";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/issuesList" />} />
      <Route path="/issuesList" element={<IssuesListPage />} />
      <Route path="/issuesList/:number" element={<IssueDetailsPage />}></Route>
    </Routes>
  );
};

export default App;
