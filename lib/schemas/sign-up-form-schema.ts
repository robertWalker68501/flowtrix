import * as z from 'zod';

export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must be at lease 3 characters long')
      .max(30, 'Name can not exceed 30 characters'),
    email: z.email('Email is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(30, 'Password can not be longer than 30 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
