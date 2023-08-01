import axios  from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// https://file-server-api.vercel.app/
const baseQuery = fetchBaseQuery({ baseUrl: 'https://file-server-api.vercel.app', credentials: 'include' });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Document'],
    endpoints: (builder) => ({})
});