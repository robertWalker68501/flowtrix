'use client';

import { LogOutIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { authClient } from '@/lib/auth-client';

const LogoutButton = () => {
  const router = useRouter();

  const logoutUser = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/sign-in');
        },
      },
    });
  };

  return (
    <div className='flex items-center gap-2'>
      <LogOutIcon
        className='cursor-pointer'
        onClick={logoutUser}
      />
    </div>
  );
};

export default LogoutButton;
