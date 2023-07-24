import { z } from "zod"

 const CHANGE_PASSWORD_DATA = z.object({
    currentPassword: z.string()
        .nonempty('Please enter your password')
        .min(8, 'Are you sure this is a valid password'),
    newPassword: z.string().nonempty('Please enter your new password').refine(val => {
        if (val.length < 8) return false;

        if (!/[A-Z]/.test(val)) return false;
        
        if (!/[a-z]/.test(val)) return false;
        
        if (!/[^a-zA-Z0-9]/.test(val)) return false;

        return true;
    }, 'Passwords must be at least 8 characters long and include upper case, lower case, and special characters.'),
    confirmPassword: z.string().nonempty('Confirm your new password'),
 }).refine((val) => val.newPassword === val.confirmPassword, {
    message: `Password don't match`,
    path: ['confirmPassword'],
  
});

type CHANGE_PASSWORD_DATA = z.infer<typeof CHANGE_PASSWORD_DATA>
 

export {CHANGE_PASSWORD_DATA}