import {
  AlertTriangle,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Factory,
  PackageCheck,
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DASHBOARD_STATS, ACTIVITIES, SUPPLY_HEALTH, RISKS } from '@/constants';

const Dashboard = () => {
  return (
    <div className='space-y-8'>
      {/* Page header */}
      <div className='flex flex-col gap-2'>
        <p className='text-muted-foreground text-sm'>Dashboard / Overview</p>

        <div className='flex flex-col justify-between gap-4 md:flex-row md:items-end'>
          <div>
            <h1 className='font-heading text-3xl font-bold tracking-tight'>
              Operations Overview
            </h1>
            <p className='text-muted-foreground mt-2 max-w-2xl'>
              Monitor client supply chains, shipment activity, inventory health,
              purchase orders, and supplier performance from one command center.
            </p>
          </div>

          <div className='border-border bg-card flex items-center gap-2 rounded-xl border px-4 py-3 text-sm shadow-sm'>
            <span className='bg-primary size-2 rounded-full' />
            Live operations data
          </div>
        </div>
      </div>

      {/* KPI cards */}
      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {DASHBOARD_STATS.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-muted-foreground text-sm font-medium'>
                {stat.title}
              </CardTitle>
              <stat.icon className='text-primary size-5' />
            </CardHeader>

            <CardContent>
              <div className='font-heading text-3xl font-bold'>
                {stat.value}
              </div>
              <p className='text-muted-foreground mt-1 flex items-center gap-1 text-sm'>
                <ArrowUpRight className='size-4' />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className='grid gap-6 xl:grid-cols-[1.3fr_0.7fr]'>
        {/* Supply health */}
        <Card>
          <CardHeader>
            <CardTitle className='font-heading'>Supply Chain Health</CardTitle>
          </CardHeader>

          <CardContent className='space-y-5'>
            {SUPPLY_HEALTH.map((item) => (
              <div key={item.label}>
                <div className='mb-2 flex items-center justify-between text-sm'>
                  <span className='text-muted-foreground'>{item.label}</span>
                  <span className='font-medium'>{item.value}%</span>
                </div>

                <div className='bg-muted h-2 rounded-full'>
                  <div
                    className='bg-primary h-2 rounded-full'
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Risk panel */}
        <Card>
          <CardHeader>
            <CardTitle className='font-heading flex items-center gap-2'>
              <AlertTriangle className='text-destructive size-5' />
              Risk Alerts
            </CardTitle>
          </CardHeader>

          <CardContent className='space-y-4'>
            {RISKS.map((risk) => (
              <div
                key={risk}
                className='border-border bg-muted/40 rounded-xl border p-4 text-sm'
              >
                {risk}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-6 xl:grid-cols-[0.8fr_1.2fr]'>
        {/* Client snapshot */}
        <Card>
          <CardHeader>
            <CardTitle className='font-heading'>Client Snapshot</CardTitle>
          </CardHeader>

          <CardContent className='space-y-4'>
            {[
              {
                name: 'Northline Foods',
                detail: '312 active SKUs',
                icon: PackageCheck,
              },
              {
                name: 'Vertex Retail',
                detail: '8 open purchase orders',
                icon: Building2,
              },
              {
                name: 'Harbor Logistics',
                detail: '96% fulfillment rate',
                icon: Factory,
              },
            ].map((client) => (
              <div
                key={client.name}
                className='border-border flex items-center gap-4 rounded-xl border p-4'
              >
                <div className='bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg'>
                  <client.icon className='size-5' />
                </div>

                <div>
                  <p className='font-medium'>{client.name}</p>
                  <p className='text-muted-foreground text-sm'>
                    {client.detail}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle className='font-heading'>Recent Activity</CardTitle>
          </CardHeader>

          <CardContent className='space-y-4'>
            {ACTIVITIES.map((activity) => (
              <div
                key={activity.title}
                className='border-border flex gap-4 rounded-xl border p-4'
              >
                <div className='bg-primary/10 flex size-9 shrink-0 items-center justify-center rounded-full'>
                  <CheckCircle2 className='text-primary size-5' />
                </div>

                <div className='flex-1'>
                  <div className='flex flex-col justify-between gap-1 sm:flex-row sm:items-center'>
                    <p className='font-medium'>{activity.title}</p>
                    <span className='bg-secondary text-secondary-foreground rounded-full px-2.5 py-1 text-xs'>
                      {activity.status}
                    </span>
                  </div>

                  <p className='text-muted-foreground mt-1 text-sm'>
                    {activity.meta}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
