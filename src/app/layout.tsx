import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dev-Archive',
  description: 'StrongerDeer Dev-Archive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body>{children}</body>
    </html>
  );
}
