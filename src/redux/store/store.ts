import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import { apiSlice } from "../slices/apiSlice";
const STORE = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});

export type RootState = ReturnType<typeof STORE.getState>

export default STORE