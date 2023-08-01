import axios  from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const baseUrl = 'https://file-server-api.vercel.app'

// https://file-server-api.vercel.app/

const baseQuery = fetchBaseQuery({ baseUrl, credentials: 'include' });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'Document'],
    endpoints: (builder) => ({})
});