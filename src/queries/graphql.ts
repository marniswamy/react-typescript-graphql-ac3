import { gql } from "@apollo/client";

export const SEARCH_LIST_QUERY = gql`
  query SearchList($state: IssueState!, $search: String!) {
    repository(owner: "facebook", name: "react") {
      issues(
        states: [$state]
        first: 50
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
      }
    }
    search(query: $search, type: ISSUE, first: 20) {
      nodes {
        ... on Issue {
          id
          title
          body
          number
          state
          updatedAt
          createdAt
          author {
            login
          }
        }
      }
    }
  }
`;

export const ISSUES_LIST = gql`
  query IssueList($state: IssueState!) {
    repository(owner: "facebook", name: "react") {
      issues(
        states: [$state]
        first: 50
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          id
          title
          body
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
