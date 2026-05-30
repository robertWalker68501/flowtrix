import {
  BarChart3,
  Boxes,
  Building2,
  ClipboardList,
  Factory,
  Truck,
} from 'lucide-react';

export const NAV_LINKS = [
  {
    id: 1,
    label: 'Features',
    href: '/features',
  },
  {
    id: 2,
    label: 'Solutions',
    href: '/solutions',
  },
  {
    id: 3,
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 4,
    label: 'About',
    href: '/about',
  },
  {
    id: 5,
    label: 'Contact',
    href: '/contact',
  },
];

export const STATS = [
  { value: '24/7', label: 'Supply chain visibility' },
  { value: 'Multi-client', label: 'Operations management' },
  { value: 'Real-time', label: 'Inventory and shipment insights' },
];

export const FEATURES = [
  {
    icon: Building2,
    title: 'Client Organization Management',
    description:
      'Manage multiple client businesses from one secure operational dashboard.',
  },
  {
    icon: Boxes,
    title: 'Inventory Visibility',
    description:
      'Track stock levels, reorder points, warehouse activity, and inventory movement.',
  },
  {
    icon: Truck,
    title: 'Shipment Tracking',
    description:
      'Monitor inbound and outbound shipments with clear delivery status updates.',
  },
  {
    icon: ClipboardList,
    title: 'Purchase Order Control',
    description:
      'Create, review, and manage purchase orders across suppliers and clients.',
  },
  {
    icon: Factory,
    title: 'Supplier Performance',
    description:
      'Evaluate suppliers by reliability, delivery speed, fulfillment accuracy, and risk.',
  },
  {
    icon: BarChart3,
    title: 'Operational Analytics',
    description:
      'Turn supply chain data into clear insights for faster business decisions.',
  },
];

export const WORKFLOW = [
  'Connect client organizations',
  'Map suppliers, warehouses, and inventory',
  'Track purchase orders and shipments',
  'Analyze performance across every supply chain',
];

export const DASHBOARD_STATS = [
  {
    title: 'Managed Clients',
    value: '36',
    change: '+4 this month',
    icon: Building2,
  },
  {
    title: 'Active Shipments',
    value: '1,248',
    change: '91% on time',
    icon: Truck,
  },
  {
    title: 'Inventory Accuracy',
    value: '94%',
    change: '+2.4% improved',
    icon: Boxes,
  },
  {
    title: 'Open Purchase Orders',
    value: '287',
    change: '42 awaiting approval',
    icon: ClipboardList,
  },
];

export const ACTIVITIES = [
  {
    title: 'Northline Foods shipment cleared receiving',
    meta: '12 minutes ago',
    status: 'Completed',
  },
  {
    title: 'Vertex Retail inventory dropped below reorder point',
    meta: '38 minutes ago',
    status: 'Attention',
  },
  {
    title: 'Supplier score updated for Harbor Freight Logistics',
    meta: '1 hour ago',
    status: 'Updated',
  },
  {
    title: 'Purchase order #PO-10482 sent for approval',
    meta: '2 hours ago',
    status: 'Pending',
  },
];

export const SUPPLY_HEALTH = [
  { label: 'On-time delivery', value: 91 },
  { label: 'Supplier reliability', value: 88 },
  { label: 'Inventory accuracy', value: 94 },
  { label: 'Order fulfillment', value: 86 },
];

export const RISKS = [
  '3 suppliers below reliability threshold',
  '12 items approaching low stock',
  '5 delayed inbound shipments',
];
