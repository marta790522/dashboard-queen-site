import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Queen | Salesforce & RevOps Consulting',
  description: 'Salesforce Administration, Revenue Operations, Process Automation, Reporting and Dashboards by Marta Szymanska.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
