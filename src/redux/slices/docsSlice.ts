import { createSlice } from '@reduxjs/toolkit';
import { DOCS_TYPE } from './types';



const initialState:{documents:DOCS_TYPE[], selectedDocument: DOCS_TYPE | null} = {
    documents: [],
    selectedDocument: null
};


const docsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        setDocuments: (state, action) => {
            state.documents = action.payload;
        },
        setSelectedDocument: (state, action) => { 
            state.selectedDocument = action.payload;
            // localStorage.setItem('s_doc', JSON.stringify(action.payload));
        },
        clearSelectedDocument: (state) => { 
            state.selectedDocument = null;
            localStorage.removeItem('s_doc');
        }
    }
})



export const {setDocuments, setSelectedDocument, clearSelectedDocument} = docsSlice.actions

export default docsSlice.reducer