import { createApi } from "@reduxjs/toolkit/query/react";
import { gql } from "graphql-request";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    url: "https://api.github.com/graphql",

    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_ACCESS_TOKEN;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getRepositories: builder.query({
      query: (searchWord) => ({
        document: gql`
          query ($searchWord: String!) {
            search(query: $searchWord, type: REPOSITORY, first: 2) {
              edges {
                node {
                  ... on Repository {
                    name
                    primaryLanguage {
                      name
                    }
                    forkCount
                    stargazerCount
                    updatedAt
                  }
                }
              }
            }
          }
        `,
        variables: {
          searchWord
        }
      }),
      transformResponse: (response) => response.search.edges,
    }),
  }),
});

export const { useLazyGetRepositoriesQuery } = api;