import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Post } from '../../entities/postItem/types';

type PostList = Post[];

export const postApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),

  endpoints: (builder) => ({
    postList: builder.query<PostList, void>({
      query() {
        return `/posts`;
      },
    }),
    postDetails: builder.query<Post, string>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { usePostListQuery, usePostDetailsQuery } = postApi;
