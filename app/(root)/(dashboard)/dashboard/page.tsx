import { Package, TriangleAlert, Truck } from 'lucide-react';

import { EmptyState } from '@/components/dashboard/EmptyState';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { SectionHeader } from '@/components/dashboard/SectionHeader';
import { StatCard } from '@/components/dashboard/StatCard';
import { StatusBadge } from '@/components/dashboard/StatusBadge';
import SidebarTopNav from '@/components/sidebar/SidebarTopNav';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div className='border-border flex h-12 items-center justify-between border-b px-5'>
        <div className='border-border flex h-full items-center border-r pr-5'>
          <SidebarTrigger />
        </div>
        <SidebarTopNav />
      </div>
      {/* Page Content */}
      <div className='space-y-6 p-5'>
        <PageHeader
          title='Overview'
          description='Monitor orders, shipments, inventory, and operational health.'
          actions={
            <>
              <Button variant='outline'>Export</Button>
              <Button>New Order</Button>
            </>
          }
        />

        <section className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          <StatCard
            title='Active Orders'
            value='1,248'
            icon={Package}
            trend={{ value: '+12.4%', direction: 'up', label: 'vs last month' }}
            description='Orders currently in process.'
          />

          <StatCard
            title='Shipments In Transit'
            value='312'
            icon={Truck}
            trend={{ value: '+4.8%', direction: 'up', label: 'vs last week' }}
            description='Shipments moving through the network.'
          />
        </section>

        <section className='space-y-4'>
          <SectionHeader
            title='Inventory alerts'
            description='Items that need attention across your warehouses.'
            action={<Button variant='outline'>View all</Button>}
          />

          <div className='bg-card rounded-xl border p-4'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='font-medium'>Industrial Sensor Pack</p>
                <p className='text-muted-foreground text-sm'>Warehouse West</p>
              </div>

              <StatusBadge variant='warning'>Low Stock</StatusBadge>
            </div>
          </div>
        </section>

        <EmptyState
          icon={TriangleAlert}
          title='No delayed shipments'
          description='Everything looks good right now. Delayed shipments will appear here when action is needed.'
          action={<Button variant='outline'>Refresh status</Button>}
        />
      </div>
    </div>
  );
};

export default Dashboard;
