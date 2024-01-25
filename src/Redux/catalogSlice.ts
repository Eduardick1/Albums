import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAlbum, IPhoto, IUser } from "../utils/types";

export const catalogApi = createApi({
  reducerPath: "catalogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => "/users",
    }),
    getAlbums: builder.query<IAlbum[], string>({
      query: (userId) => `/albums/${userId}`,
    }),
    getPhotos: builder.query<IPhoto[], string>({
      query: (albumId) => `/photos/${albumId}`,
    }),
  }),
});

export const { useGetUsersQuery, useGetAlbumsQuery, useGetPhotosQuery } =
  catalogApi;
