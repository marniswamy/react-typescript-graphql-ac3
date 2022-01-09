import { gql } from "@apollo/client";

export const ISSUES_LIST = gql`
  query {
    repository(owner: "facebook", name: "react") {
      issues(
        states: OPEN
        first: 10
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          title
          body
          id
        }
        totalCount
      }
    }
  }
`;
