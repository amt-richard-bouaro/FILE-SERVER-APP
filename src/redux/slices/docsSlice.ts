import { FILE_TYPE } from './../../types';
import { createSlice } from '@reduxjs/toolkit';
// import { DOCS_TYPE } from './types';



const initialState:{documents:FILE_TYPE[], selectedDocument: FILE_TYPE | null, recents:FILE_TYPE[], selectedRecent:FILE_TYPE | null} = {
    documents: [],
    selectedDocument: null,
    recents: [],
    selectedRecent:null
};


const docsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
        setDocuments: (state, action) => {
            state.documents = action.payload;
        },
        setRecents: (state, action) => {
            state.recents = action.payload;
        },
        setSelectedDocument: (state, action) => { 
            state.selectedDocument = action.payload;
            // localStorage.setItem('s_doc', JSON.stringify(action.payload));
        },
        clearSelectedDocument: (state) => { 
            state.selectedDocument = null;
            localStorage.removeItem('s_doc');
        },
         setSelectedRecent: (state, action) => { 
            state.selectedRecent = action.payload;
            // localStorage.setItem('s_doc', JSON.stringify(action.payload));
        },
        clearSelectedRecent: (state) => { 
            state.selectedRecent = null;
            localStorage.removeItem('s_rec');
        }
    }
})



export const {setDocuments, setSelectedDocument, clearSelectedDocument,setRecents,clearSelectedRecent,setSelectedRecent} = docsSlice.actions

export default docsSlice.reducer