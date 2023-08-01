
import { apiSlice } from "./apiSlice";

const DOCS_ENDPOINT = '/api/documents'

export const docsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        upload: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/upload`,
                method: 'POST',
                body: data,
            })
        }),
        documents: builder.mutation({
            query: () => ({
                url: `${DOCS_ENDPOINT}/`,
                method: 'Get',

            })
        }),
        recents: builder.mutation({
            query: () => ({
                url: `${DOCS_ENDPOINT}/recent/documents`,
                method: 'Get',

            })
        }),
        update: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/update/${data._id}`,
                method: 'PUT',
                body: data.data
            })
        }),
        delete: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/destroy/${data}`,
                method: 'DELETE',

            })
        }),
        download: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/download/${data}`,
                method: 'GET',          
            })
        }),
        email: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/email/${data}`,
                method: 'GET',

            })
        }),
        search: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/search`,
                method: 'POST',
                body: data
            })
        }),
        stats: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/stats`,
                method: 'GET'

            })
        }),

    })
});


export const { useDocumentsMutation, useUploadMutation, useUpdateMutation, useDeleteMutation, useDownloadMutation, useSearchMutation, useEmailMutation, useRecentsMutation, useStatsMutation } = docsApiSlice;