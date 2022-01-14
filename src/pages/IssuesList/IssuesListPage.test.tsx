import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import IssuesListPage from "./IssuesListPage";
import { InMemoryCache } from "@apollo/client";

import { renderApollo, cleanup } from "../../../test-utils";
import { ISSUES_LIST } from "../../queries/graphql";

test("renders a message", () => {
  const { container, getByText } = render(<IssuesListPage />);
  expect(getByText("React Repository Issues")).toBeInTheDocument();
});

describe("Issues list page", () => {
  const mockData = {
    repository: {
      issues: {
        nodes: [
          {
            id: "I_kwDOAJy2Ks5Bvt-0",
            title: "This page is using the react build message in every site",
            body: "### Website or app has No response_",
            number: 23107,
            state: "OPEN",
            updatedAt: "2022-01-14T05:37:37Z",
            createdAt: "2022-01-14T05:36:41Z",
            author: {
              login: "Fernando-Espinosa",
              __typename: "User",
            },
            __typename: "Issue",
          },
        ],
        totalCount: 691,
        __typename: "IssueConnection",
      },
      __typename: "Repository",
    },
  };

  afterEach(cleanup);

  it("renders the issue list", async () => {
    const cache = new InMemoryCache({ addTypename: false });
    const mocks = [
      {
        request: { query: ISSUES_LIST },
        result: {
          data: mockData,
        },
      },
    ];
    const { getByText } = await renderApollo(<IssuesListPage />, {
      mocks,
      cache,
    });

    const element = screen.getByTestId("search_button");

    fireEvent.click(element);
    await waitFor(() =>
      getByText("This page is using the react build message in every site")
    );
  });
});
