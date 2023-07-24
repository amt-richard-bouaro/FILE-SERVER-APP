
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
        
    })
});


export const { useDocumentsMutation, useNewMutation } = docsApiSlice;