import Link from 'next/link';

import { Button } from '../ui/button';

const AuthButtons = () => {
  return (
    <div className='flex items-center gap-4'>
      <Button
        variant='ghost'
        asChild
      >
        <Link href='/sign-in'>Sign In</Link>
      </Button>
      <Button asChild>
        <Link href='/sign-up'>Get Started</Link>
      </Button>
    </div>
  );
};

export default AuthButtons;
