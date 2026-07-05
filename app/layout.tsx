import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fancymissy.com'),

  title: {
    default: 'Dashboard Queen | Salesforce & RevOps Consulting',
    template: '%s | Dashboard Queen',
  },

  description:
    'Salesforce Administration, Revenue Operations, Process Automation, Reporting, Dashboards, Data Governance and CRM Optimization by Marta Szymanska.',

  keywords: [
    'Salesforce Consultant',
    'Salesforce Administrator',
    'RevOps Consultant',
    'Revenue Operations',
    'Sales Operations',
    'CRM Optimization',
    'Salesforce Automation',
    'Salesforce Reporting',
    'Salesforce Dashboards',
    'Fractional Salesforce Admin',
    'Salesforce Phoenix',
    'Salesforce Arizona',
  ],

  authors: [{ name: 'Marta Szymanska' }],

  openGraph: {
    title: 'Dashboard Queen | Salesforce & RevOps Consulting',
    description:
      'Helping companies improve Salesforce, Revenue Operations, Reporting and Automation.',
    url: 'https://www.fancymissy.com',
    siteName: 'Dashboard Queen',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard Queen | Salesforce & RevOps Consulting',
    description:
      'Salesforce Administration, RevOps, Reporting and Automation.',
  },

  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
