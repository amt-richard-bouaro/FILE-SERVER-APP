import { z } from "zod"

 const DOC_INFO = z.object({
    title: z.string()
        .nonempty('Please provide document title')
        .min(3, 'Document title must be understandable with not less than 3 characters'),
    description: z.string()
        .nonempty('Please provide description for this document')
        .min(3, 'Document description must be understandable with not less than 3 characters'),
 });

type DOC_INFO = z.infer<typeof DOC_INFO>
 

export {DOC_INFO}