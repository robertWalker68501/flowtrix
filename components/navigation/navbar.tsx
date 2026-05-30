import { headers } from 'next/headers';
import Link from 'next/link';

import { NAV_LINKS } from '@/constants';
import { auth } from '@/lib/auth';

import SiteLogo from '../site-logo';
import ThemeToggle from '../theme-toggle';
import MobileNav from './mobile-nav';
import NavLink from './nav-link';
import AuthButtons from '../auth/auth-buttons';
import { Button } from '../ui/button';

const Navbar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <nav className='flex items-center justify-between py-4'>
      {/* Site logo */}
      <SiteLogo href='/' />

      {/* Desktop nav */}
      <div className='hidden items-center gap-4 md:flex'>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            href={link.href}
            label={link.label}
          />
        ))}
        {!session && <AuthButtons />}
        <ThemeToggle />
      </div>

      {/* Mobile nav */}
      <div className='block md:hidden'>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
