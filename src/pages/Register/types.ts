import { z } from "zod";


const USER = z.object({
    surname: z.string()
        .min(3, 'Surname cannot be less than 3 characters')
        .nonempty('Provide you surname'),
    other_names: z.string()
        .min(3, 'Other names cannot be less than 3 characters')
        .nonempty('Provide you other names'),
    email: z.string().nonempty('Email address is required.').email('Please enter a valid email address.').min(5),
    password: z.string().nonempty('Password is required.').refine(val => {
        if (val.length < 8) return false;

        if (!/[A-Z]/.test(val)) return false;
        
        if (!/[a-z]/.test(val)) return false;
        
        if (!/[^a-zA-Z0-9]/.test(val)) return false;

        return true;
    }, 'Passwords must be at least 8 characters long and include upper case, lower case, and special characters.'),
    confirmPassword: z.string().nonempty('Confirm Password'),
}).refine((val) => val.password === val.confirmPassword, {
    message: `Password don't match`,
    path: ['confirmPassword'],
  
});


type USER = z.infer<typeof USER>

export {USER}