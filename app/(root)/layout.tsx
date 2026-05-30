import { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
