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
import { signInFormSchema } from '@/lib/schemas/sign-in-form-schema';

const SignInForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: z.infer<typeof signInFormSchema>) => {
    const { email, password } = data;

    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          toast.success('Signed is successfully');
          router.push('/');
          router.refresh();
        },
        onError: () => {
          toast.error('Failed to sign in');
        },
      }
    );
  };

  return (
    <Card className='mx-auto max-w-lg'>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Take control of your supply chain</CardDescription>
      </CardHeader>
      <form
        id='sign-in-form'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <CardContent>
          <FieldGroup>
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
          </FieldGroup>
        </CardContent>
        <CardFooter className='mt-6'>
          <Field orientation='horizontal'>
            <Button
              type='submit'
              form='sign-in-form'
              disabled={isSubmitting}
            >
              {isSubmitting ? <Loader2 /> : 'Sign In'}
            </Button>
          </Field>
          <Field orientation='horizontal'>
            <p className='text-muted-foreground text-xs'>
              Don&apos;t have an account?{' '}
              <Link
                href='/sign-up'
                className='hover:text-primary'
              >
                Sign Up
              </Link>
            </p>
          </Field>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignInForm;
