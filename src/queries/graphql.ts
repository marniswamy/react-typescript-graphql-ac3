import { gql } from "@apollo/client";

export const ISSUES_LIST = gql`
  query SearchList($state: IssueState!) {
    repository(owner: "facebook", name: "react") {
      issues(
        states: [$state]
        first: 10
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          title
          number
          state
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
        state
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
