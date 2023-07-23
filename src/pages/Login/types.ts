

import {z} from 'zod'

 const USER_CREDENTIALS = z.object({
    email: z.string().nonempty('Email address is required.').email('Please enter a valid email address.'),
    password: z.string().nonempty('Email address is required.')
})

type USER_CREDENTIALS = z.infer<typeof USER_CREDENTIALS>


export type FetchBaseQueryError =
  | {
      /**
       * * `number`:
       *   HTTP status code
       */
      status: number
      data: unknown
    }
  | {
      /**
       * * `"FETCH_ERROR"`:
       *   An error that occurred during execution of `fetch` or the `fetchFn` callback option
       **/
      status: 'FETCH_ERROR'
      data?: undefined
      error: string
    }
  | {
      /**
       * * `"PARSING_ERROR"`:
       *   An error happened during parsing.
       *   Most likely a non-JSON-response was returned with the default `responseHandler` "JSON",
       *   or an error occurred while executing a custom `responseHandler`.
       **/
      status: 'PARSING_ERROR'
      originalStatus: number
      data: string
      error: string
    }
  | {
      /**
       * * `"CUSTOM_ERROR"`:
       *   A custom error type that you can return from your `queryFn` where another error might not make sense.
       **/
      status: 'CUSTOM_ERROR'
      data?: unknown
      error: string
    }








export {USER_CREDENTIALS}