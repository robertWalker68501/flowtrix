# Flowtrix

Flowtrix is a modern supply chain management dashboard built with Next.js, shadcn/ui, Radix UI, and Tailwind CSS. It is designed to help businesses manage orders, inventory, shipments, products, and operational analytics from one unified interface.

The project focuses on clean design, reusable dashboard components, modern React architecture, and a scalable foundation for a future SaaS application.

---

## Overview

Flowtrix provides a centralized platform for monitoring and managing supply chain operations across the business. The application is structured like a modern SaaS dashboard and is intended to serve as the foundation for a full-featured operations platform.

Core areas of the application include:

- Order management
- Inventory tracking
- Shipment monitoring
- Product management
- Operational analytics
- System settings and future team management

Flowtrix is being built with a reusable component-driven architecture, so new modules and pages can be added consistently as the product grows.

---

## Features

### Dashboard Overview

The overview page gives users a quick snapshot of operational health and key metrics.

Features include:

- Summary stat cards
- Inventory alerts
- Shipment status visibility
- Order trend summaries
- Operational highlights
- Empty states for modules with no current data

### Orders

The Orders section is intended to help businesses create, organize, and monitor customer and internal orders.

Planned and current capabilities include:

- Order listing
- Order status tracking
- Search and filtering
- Export functionality
- Order detail pages
- Future order creation and editing workflows

### Inventory

The Inventory section helps track stock levels and identify items that need attention.

Features include:

- Inventory overview
- Low-stock alerts
- Warehouse stock visibility
- Product quantity tracking
- Inventory status monitoring

### Shipments

The Shipments module is designed to give operations teams visibility into product movement and delivery flow.

Features include:

- Active shipment tracking
- In-transit visibility
- Delayed shipment monitoring
- Shipment status views
- Logistics summaries

### Products

The Products section provides a central place to manage the product catalog.

Features include:

- Product listings
- SKU visibility
- Category support
- Product-to-inventory relationships
- Scalable structure for future product detail pages

### Analytics

The Analytics module is intended to surface operational insights across orders, inventory, and fulfillment performance.

Planned analytics include:

- Order trends
- Inventory usage patterns
- Shipment performance metrics
- Delay trends
- Operational summaries
- Business performance dashboards

### Settings

The Settings section is intended to support future application and user customization.

Planned areas include:

- Application preferences
- Theme preferences
- Account settings
- Organization settings
- Future role and access controls

---

## Design System

Flowtrix uses a reusable dashboard UI system to keep the application consistent and scalable.

### Reusable Dashboard Components

The UI foundation includes reusable blocks such as:

- `PageHeader`
- `SectionHeader`
- `StatCard`
- `StatusBadge`
- `EmptyState`

These components help maintain a consistent structure, spacing, and styling across dashboard pages.

### Design Goals

The Flowtrix design system is built around the following goals:

- Clean and modern SaaS styling
- Strong readability
- Reusable UI patterns
- Consistent spacing
- Neutral surfaces with branded accents
- Light and dark mode support
- Scalable dashboard layouts

### Typography

Flowtrix uses the following font system:

- **Inter** for UI and body text
- **Space Grotesk** for headings and brand-forward display text
- **JetBrains Mono** for IDs, data values, and technical content

### Color Palette

The Flowtrix palette is designed to feel modern, operational, and trustworthy.

The system uses:

- Blue for primary brand actions
- Cyan for flow and motion accents
- Emerald for success states
- Orange for warning states
- Red for destructive or error states
- Neutral grays for surfaces, borders, and dashboard structure

---

## Tech Stack

Flowtrix is currently built with the following technologies:

- **Next.js 16**
- **React**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**
- **Radix UI**
- **Lucide React**
- **next-themes**

This stack provides a modern developer experience, accessible UI primitives, and strong support for scalable dashboard development.

---

## Application Structure

```txt
app/
  (dashboard)/
    layout.tsx
    dashboard/
      page.tsx
    orders/
    inventory/
    shipments/
    products/
    analytics/
    settings/

components/
  dashboard/
    empty-state.tsx
    page-header.tsx
    section-header.tsx
    stat-card.tsx
    status-badge.tsx

  ui/
    ...shadcn ui components

providers/
  Providers.tsx
  ThemeProvider.tsx

lib/
  utils.ts