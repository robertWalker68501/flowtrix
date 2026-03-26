import { ReactNode } from 'react';

import AppSidebar from '@/components/sidebar/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='flex-1'>{children}</main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
