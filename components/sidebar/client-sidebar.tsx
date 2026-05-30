'use client';

import {
  BookA,
  Boxes,
  ClipboardList,
  Container,
  LayoutDashboard,
  Settings,
  Spotlight,
  TrendingUpDown,
  Truck,
  UserRoundKey,
  Users2,
  Warehouse,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { authClient } from '@/lib/auth-client';
import darkLogo from '@/public/assets/images/logo-dark.png';
import lightLogo from '@/public/assets/images/logo-light.png';

import LogoutButton from '../auth/logout-button';
import ThemeToggle from '../theme-toggle';

const ClientSidebar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <Sidebar>
      <SidebarHeader className='border-border border-b'>
        <Image
          src={lightLogo}
          alt='Flowtrix Logo'
          height='40'
          width='120'
          className='block h-auto w-30 dark:hidden'
        />
        <Image
          src={darkLogo}
          alt='Flowtrix Logo'
          height='40'
          width='120'
          className='hidden h-auto w-30 dark:block'
        />
      </SidebarHeader>
      <SidebarContent>
        {/* Dashboard */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/dashboard'>
                    <LayoutDashboard />
                    Dashboard
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Operations */}
        <SidebarGroup>
          <SidebarGroupLabel>Operations</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/clients'>
                    <Users2 />
                    Clients
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/suppliers'>
                    <Container />
                    Suppliers
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/inventory'>
                    <Boxes />
                    Inventory
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/warehouses'>
                    <Warehouse />
                    Warehouses
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/shipments'>
                    <Truck />
                    Shipments
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href='/purchase-orders'>
                    <BookA />
                    Purchase Orders
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {/* Analytics */}
        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/reports'>
                  <ClipboardList />
                  Reports
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/performance'>
                  <Spotlight />
                  Performance
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/forecasting'>
                  <TrendingUpDown />
                  Forecasting
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {/* Administration */}
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/users'>
                  <Users2 />
                  Users
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/roles'>
                  <UserRoundKey />
                  Roles
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href='/roles'>
                  <Settings />
                  Settings
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className='flex items-center justify-between'>
          <p className='text-sm'>{user?.name}</p>
          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <LogoutButton />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default ClientSidebar;
