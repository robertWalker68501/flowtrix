import { ReactNode } from 'react';

import ClientSidebar from '@/components/sidebar/client-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <ClientSidebar />
      <main className='w-full'>
        <div>
          <SidebarTrigger />
        </div>
        <div className='p-10'>{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default DashboardLayout;
