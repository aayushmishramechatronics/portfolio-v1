import { z } from 'zod';

export const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'email is required' })
    .email({ message: 'must be a valid email' }),
  message: z.string().min(1, { message: 'message is required' }),
});

export type TFormSchema = z.infer<typeof formSchema>;
