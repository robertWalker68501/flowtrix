import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  LineChart,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { STATS } from '@/constants';
import { FEATURES } from '@/constants';
import { WORKFLOW } from '@/constants';
import { auth } from '@/lib/auth';

const Home = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect('/dashboard');
  }

  return (
    <div className='page-wrapper'>
      <div className='bg-background text-foreground'>
        {/* Hero */}
        <section className='border-border relative overflow-hidden border-b'>
          <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--chart-1),transparent_32%),radial-gradient(circle_at_top_left,var(--primary),transparent_28%)] opacity-15' />

          <div className='page-wrapper grid gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28'>
            <div className='max-w-3xl'>
              <div className='border-border bg-card text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm'>
                <ShieldCheck className='text-primary size-4' />
                Built for multi-client supply chain operations
              </div>

              <h1 className='font-heading text-4xl leading-tight font-bold tracking-tight text-balance md:text-6xl'>
                Manage every supply chain from one intelligent platform.
              </h1>

              <p className='text-muted-foreground mt-6 max-w-2xl text-lg leading-8'>
                Flowtrix helps one business oversee the suppliers, inventory,
                purchase orders, warehouses, and shipments of multiple client
                organizations with clarity and control.
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Button
                  size='lg'
                  className='gap-2'
                >
                  Start building operations
                  <ArrowRight className='size-4' />
                </Button>

                <Button
                  size='lg'
                  variant='outline'
                >
                  View platform modules
                </Button>
              </div>

              <div className='mt-10 grid gap-4 sm:grid-cols-3'>
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className='border-border bg-card rounded-xl border p-4 shadow-sm'
                  >
                    <p className='font-heading text-primary text-2xl font-bold'>
                      {stat.value}
                    </p>
                    <p className='text-muted-foreground mt-1 text-sm'>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard preview */}
            <div className='border-border bg-card rounded-3xl border p-4 shadow-xl'>
              <div className='border-border bg-muted/40 rounded-2xl border p-4'>
                <div className='mb-6 flex items-center justify-between'>
                  <div>
                    <p className='font-heading text-lg font-semibold'>
                      Operations Overview
                    </p>
                    <p className='text-muted-foreground text-sm'>
                      Client supply chain performance
                    </p>
                  </div>
                  <div className='bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium'>
                    Live
                  </div>
                </div>

                <div className='grid gap-4 sm:grid-cols-2'>
                  <div className='bg-card border-border rounded-xl border p-4'>
                    <PackageCheck className='text-primary mb-4 size-5' />
                    <p className='text-muted-foreground text-sm'>
                      Active shipments
                    </p>
                    <p className='font-heading mt-1 text-3xl font-bold'>
                      1,248
                    </p>
                  </div>

                  <div className='bg-card border-border rounded-xl border p-4'>
                    <Globe2 className='text-primary mb-4 size-5' />
                    <p className='text-muted-foreground text-sm'>
                      Managed clients
                    </p>
                    <p className='font-heading mt-1 text-3xl font-bold'>36</p>
                  </div>
                </div>

                <div className='bg-card border-border mt-4 rounded-xl border p-4'>
                  <div className='mb-4 flex items-center justify-between'>
                    <p className='font-medium'>Supply flow health</p>
                    <LineChart className='text-primary size-5' />
                  </div>

                  <div className='space-y-3'>
                    {[
                      'Inventory accuracy',
                      'Supplier reliability',
                      'On-time delivery',
                    ].map((item, index) => (
                      <div key={item}>
                        <div className='mb-1 flex justify-between text-sm'>
                          <span className='text-muted-foreground'>{item}</span>
                          <span>{[94, 88, 91][index]}%</span>
                        </div>
                        <div className='bg-muted h-2 rounded-full'>
                          <div
                            className='bg-primary h-2 rounded-full'
                            style={{ width: `${[94, 88, 91][index]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className='page-wrapper py-20'>
          <div className='mx-auto max-w-3xl text-center'>
            <p className='text-primary font-medium'>Platform modules</p>
            <h2 className='font-heading mt-3 text-3xl font-bold tracking-tight md:text-4xl'>
              Everything needed to coordinate modern supply networks.
            </h2>
            <p className='text-muted-foreground mt-4 text-lg leading-8'>
              Flowtrix gives operations teams a central command center for the
              moving parts that keep client businesses running.
            </p>
          </div>

          <div className='mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className='border-border bg-card rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md'
              >
                <div className='bg-primary/10 text-primary mb-5 flex size-11 items-center justify-center rounded-xl'>
                  <feature.icon className='size-5' />
                </div>

                <h3 className='font-heading text-xl font-semibold'>
                  {feature.title}
                </h3>

                <p className='text-muted-foreground mt-3 leading-7'>
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Workflow */}
        <section className='border-border bg-muted/30 border-y'>
          <div className='page-wrapper grid gap-12 py-20 lg:grid-cols-2 lg:items-center'>
            <div>
              <p className='text-primary font-medium'>Operational workflow</p>
              <h2 className='font-heading mt-3 text-3xl font-bold tracking-tight md:text-4xl'>
                Designed for businesses that manage supply chains for others.
              </h2>
              <p className='text-muted-foreground mt-4 text-lg leading-8'>
                Unlike a basic inventory app, Flowtrix is structured around
                client organizations, giving your team the ability to manage
                separate supply networks without losing visibility.
              </p>
            </div>

            <div className='space-y-4'>
              {WORKFLOW.map((item, index) => (
                <div
                  key={item}
                  className='border-border bg-card flex gap-4 rounded-2xl border p-5 shadow-sm'
                >
                  <div className='bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-bold'>
                    {index + 1}
                  </div>

                  <div>
                    <h3 className='font-heading font-semibold'>{item}</h3>
                    <p className='text-muted-foreground mt-1 text-sm'>
                      Keep every step organized, visible, and connected to the
                      client it belongs to.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className='page-wrapper py-20'>
          <div className='bg-card border-border relative overflow-hidden rounded-3xl border p-8 shadow-sm md:p-12'>
            <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--chart-2),transparent_35%)] opacity-20' />

            <div className='grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center'>
              <div>
                <h2 className='font-heading text-3xl font-bold tracking-tight md:text-4xl'>
                  Bring clarity to every client supply chain.
                </h2>
                <p className='text-muted-foreground mt-4 max-w-2xl text-lg leading-8'>
                  Build a stronger operating system for procurement, inventory,
                  suppliers, shipments, and client visibility.
                </p>
              </div>

              <Button
                size='lg'
                className='gap-2'
              >
                Plan the dashboard
                <ArrowRight className='size-4' />
              </Button>
            </div>

            <div className='mt-8 grid gap-3 md:grid-cols-3'>
              {[
                'Multi-client ready',
                'Dashboard-first experience',
                'Built for scalable operations',
              ].map((item) => (
                <div
                  key={item}
                  className='text-muted-foreground flex items-center gap-2 text-sm'
                >
                  <CheckCircle2 className='text-primary size-4' />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
