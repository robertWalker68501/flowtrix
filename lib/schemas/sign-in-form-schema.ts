import * as z from 'zod';

export const signInFormSchema = z.object({
  email: z.email('Email is required'),
  password: z.string('password is required'),
});
