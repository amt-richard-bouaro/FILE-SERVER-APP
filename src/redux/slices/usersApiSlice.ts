import { apiSlice } from "./apiSlice";

const USERS_ENDPOINT = '/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        auth: builder.mutation({
            query: (data) => ({
                url: `${USERS_ENDPOINT}/auth`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_ENDPOINT}/logout`,
                method: 'Get',
                
            })
        }),
        create: builder.mutation({
            query: (data) => ({
                url: `${USERS_ENDPOINT}/register`,
                method: 'POST',
                body: data
            })
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: `${USERS_ENDPOINT}/password/change`,
                method: 'PUT',
                body: data
            })
        }),

        resetPassword: builder.mutation({
            query: (data) => ({
                url: `${USERS_ENDPOINT}/password/reset`,
                method: 'PUT',
                body: data
            })
        }),
    })
});


export const { useAuthMutation, useLogoutMutation, useCreateMutation, useChangePasswordMutation, useResetPasswordMutation } = usersApiSlice;