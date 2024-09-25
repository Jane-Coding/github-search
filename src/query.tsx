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
      query: () => ({
        document: gql`
          query {
            repository(owner: "octocat", name: "Hello-World") {
              url
            }
          }
        `,
      }),
      transformResponse: (response: {data: {repository: {url: string}}}) => response.repository,
    }),
  }),
});

export const { useLazyGetRepositoriesQuery } = api;