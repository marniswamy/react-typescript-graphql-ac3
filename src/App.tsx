import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import IssueDetails from "./pages/IssueDetails/IssueDetails";
import IssuesList from "./pages/IssuesList/IssuesList";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/issuesList" />} />
      <Route path="/issuesList" element={<IssuesList />} />
      <Route path="/issuesList/:id" element={<IssueDetails />}></Route>
    </Routes>
  );
};

export default App;
