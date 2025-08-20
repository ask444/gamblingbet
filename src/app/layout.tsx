import type { Metadata } from 'next';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Achievements | Casino Brand',
  description: 'Interactive achievements page built with Next.js + TypeScript + Tailwind',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}