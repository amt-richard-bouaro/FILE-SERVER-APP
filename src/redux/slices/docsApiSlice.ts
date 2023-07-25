
import { apiSlice } from "./apiSlice";

const DOCS_ENDPOINT = '/api/documents'

export const docsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        new: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/add`,
                method: 'POST',
                body: data
            })
        }),
        documents: builder.mutation({
            query: () => ({
                url: `${DOCS_ENDPOINT}/`,
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
        search: builder.mutation({
            query: (data) => ({
                url: `${DOCS_ENDPOINT}/search`,
                method: 'POST',
                body:data
            })
        }),
        
    })
});


export const { useDocumentsMutation, useNewMutation, useUpdateMutation, useDeleteMutation, useDownloadMutation, useSearchMutation } = docsApiSlice;