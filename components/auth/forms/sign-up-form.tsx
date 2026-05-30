'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { FormFieldControl } from '@/components/form-fields/form-field-control';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup } from '@/components/ui/field';
import { authClient } from '@/lib/auth-client';
import { signUpFormSchema } from '@/lib/schemas/sign-up-form-schema';

const SignUpForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    const { name, email, password } = data;

    await authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success('Account created successfully');
          router.push('/');
          router.refresh();
        },
        onError: () => {
          toast.error('Failed to create account');
        },
      }
    );
  };

  return (
    <Card className='mx-auto max-w-lg'>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Take your supply chain to the next level
        </CardDescription>
      </CardHeader>
      <form
        id='sign-up-form'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CardContent>
          <FieldGroup>
            <FormFieldControl
              control={form.control}
              name='name'
              label='Name'
              type='text'
              placeholder='John Doe'
              autoComplete='name'
            />
            <FormFieldControl
              control={form.control}
              name='email'
              label='Email'
              type='email'
              placeholder='john.doe@example.com'
              autoComplete='email'
            />
            <FormFieldControl
              control={form.control}
              name='password'
              label='Password'
              type='password'
              placeholder='********'
              autoComplete='off'
            />
            <FormFieldControl
              control={form.control}
              name='confirmPassword'
              label='Confirm Password'
              type='password'
              placeholder='********'
              autoComplete='off'
            />
          </FieldGroup>
        </CardContent>
        <CardFooter className='mt-6'>
          <Field orientation='horizontal'>
            <Button
              type='button'
              variant='outline'
              onClick={() => form.reset()}
              disabled={isSubmitting}
            >
              Reset
            </Button>
            <Button
              type='submit'
              form='sign-up-form'
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 /> : 'Sign Up'}
            </Button>
          </Field>
          <Field orientation='horizontal'>
            <p className='text-muted-foreground text-xs'>
              Already have an account?{' '}
              <Link
                href='/sign-in'
                className='hover:text-primary'
              >
                Sign In
              </Link>
            </p>
          </Field>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignUpForm;
