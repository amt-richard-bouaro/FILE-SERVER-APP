import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";
import docsReducer from "../slices/docsSlice";


const STORE = configureStore({
    reducer: {
        auth: authReducer,
        documents:docsReducer,
        [apiSlice.reducerPath]: apiSlice.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof STORE.getState>

export default STORE