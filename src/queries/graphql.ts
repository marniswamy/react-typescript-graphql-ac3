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
          id
          title
          number
          updatedAt
          createdAt
          author {
            login
          }
        }
        totalCount
      }
    }
  }
`;

export const ISSUE_DETAILS = gql`
  query Issue($number: Int!) {
    repository(owner: "facebook", name: "react") {
      issue(number: $number) {
        author {
          login
        }
        id
        body
        createdAt
        lastEditedAt
        number
        title
        updatedAt
        comments(orderBy: { field: UPDATED_AT, direction: ASC }, first: 20) {
          nodes {
            id
            body
            author {
              login
            }
            createdAt
            updatedAt
          }
          totalCount
        }
      }
    }
  }
`;
