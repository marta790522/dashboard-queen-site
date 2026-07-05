import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Dashboard Queen | Salesforce & RevOps Consulting',
  description:
    'Salesforce Administration, Revenue Operations, Process Automation, Reporting and Dashboards by Marta Szymanska.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-QG1KV72VTE"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QG1KV72VTE');
        `}
      </Script>
    </html>
  );
}
