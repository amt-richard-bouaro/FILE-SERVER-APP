import {z} from 'zod'
 const RESET_PASSWORD = z.object({
    email: z.string().email('Provide your email account')
});

type RESET_PASSWORD = z.infer<typeof RESET_PASSWORD>

export {RESET_PASSWORD}