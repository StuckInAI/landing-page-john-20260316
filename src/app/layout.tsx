import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NexaDigital - Modern Digital Solutions',
  description: 'We deliver cutting-edge digital solutions to help your business grow and thrive in the modern world.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
